import React, { useEffect, useState } from 'react';
import {useHistory } from "react-router-dom";
import { getCampusById } from '../../remote/campus-service'
import MaterialTable from 'material-table';
import { Campus } from '../../dtos/campus';
import { Building } from '../../dtos/building';
import { Grid, Card, FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core';
import { Address } from '../../dtos/address';
import { Employee } from '../../dtos/employee';
import { ResourceMetadata } from '../../dtos/resourceMetadata';


export interface ICampusDetailsProps {
}

function CampusDetailsComponent(props: ICampusDetailsProps) {

    //@ts-ignore
    const [campus, setCampus] = useState<Campus>(null as Campus);
    const [editing, setEditing] = useState(false);
    const [buildings, setBuildings] = useState<Building[]>([]);
    const [nameState, setNameState] = useState<string>('');
    const [abbrNameState, setAbbrNameState] = useState<string>('');
    //@ts-ignore
    const [tManagerState, setTManagerState] = useState<Employee>(new Employee(0, "", "", "", "", "", null as ResourceMetadata));
    //@ts-ignore
    const [sManagerState, setSManagerState] = useState<Employee>(new Employee(0, "", "", "", "", "", null as ResourceMetadata));
    //@ts-ignore
    const [hrLeadState, setHrLeadState] = useState<Employee>(new Employee(0, "", "", "", "", "", null as ResourceMetadata));
    //@ts-ignore
    const [addressState, setAddressState] = useState<Address>(null as Address);
    const history = useHistory();


    //toggles between editing and non-editing mode
    const enableEdit = () => {
        setEditing(true);
    }

    //saves states upon clicking save button ... NEEDS TO PERSIST
    const save = () => {
        setCampus({
            ...campus,
            name: nameState,
            abbrName: abbrNameState,
            shippingAddress: addressState,
            trainingManager: tManagerState,
            stagingManager: sManagerState,
            hrLead: hrLeadState
        })

        setEditing(false);
    }

    //toggles back to non-editing state upon clicking cancle button
    const cancel = () => {
        setEditing(false);
    }

    //sets pieces of info state upon changing in edit mode
    const setInfo = (event: any) => {
        switch (event.target.id) {
            case "name":
                setNameState(event.target.value);
                break;
            case "abbrName":
                setAbbrNameState(event.target.value);
                break;
            case "tManager":
                //@ts-ignore
                setTManagerState(event.target.value);
                break;
            case "sManager":
                //@ts-ignore
                setSManagerState(event.target.value);
                break;
            case "hrLead":
                //@ts-ignore
                setHrLeadState(event.target.value);
                break;
            case "street":
                setAddressState({
                    ...addressState,
                    unitStreet: event.target.value
                })
                break;
            case "city":
                setAddressState({
                    ...addressState,
                    city: event.target.value
                })
                break;
            case "state":
                setAddressState({
                    ...addressState,
                    state: event.target.value
                })
                break;
            case "zip":
                setAddressState({
                    ...addressState,
                    zip: event.target.value
                })
                break;
            case "country":
                setAddressState({
                    ...addressState,
                    country: event.target.value
                })
                break;

        }
    }

    //makes a request to the API for all campuses and selects user assigned campus
    const getCampus = async(id: number) => {
        //@ts-ignore
        let thisCampus = (await getCampusById(id)).data;

        setCampus(thisCampus)

    }

    //extracts buildings from the users assigned campus
    const getBuildings = async (campusId: number) => {
        let tempBuildings: Array<Building> = [];

        await getCampus(campusId); 

        campus?.buildings.forEach(building => {
            tempBuildings.push(building);
        })

        //@ts-ignore
        setBuildings(tempBuildings);
    } 

    useEffect(() => {
        let campusId = window.location?.pathname?.match(/\d+/)?.pop();
        //@ts-ignore
        getBuildings(+campusId);
    },[campus])  

    return (
        <>
            <div className="display-wrapper">

                <Card>
                    <div className="table-wrapper">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h2">{campus?.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {/*Below card contains the edittable items (name, abbreviated name, address, building manager)
                                    of the building which should become edittable upon clicking edit button and should save to local state upon clicking save button 
                                - need to persist data upon save
                                - need to save editting authUser for metadata
                             */}
                            <Card className="full-card">
                            <Typography>Campus Details</Typography>
                            <div id="building-form">

                                <div style={{margin: 8}}>
                                
                                <FormControl>
                                    <InputLabel shrink={true}>Campus Name: </InputLabel>
                                    {editing?
                                    <Input id="name" defaultValue={campus?.name} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="name" value={campus?.name} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                </FormControl>
                                </div>

                                <div style={{margin: 8}}>
                                <FormControl>
                                    <InputLabel shrink={true}>Abbreviated Name: </InputLabel>
                                    {editing?
                                    <Input id="abbrName" defaultValue={campus?.abbrName} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="abbrName" value={campus?.abbrName} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </div>

                                <div style={{margin: 8}}>
                                
                                <span style={{marginBottom: 10}}>
                                <InputLabel shrink={true}>Shipping Address:</InputLabel>
                                <FormControl style={{margin: 8}}>
                                    <InputLabel shrink={true}>Street</InputLabel>
                                    {editing?
                                    <Input id="street" defaultValue={campus?.shippingAddress.unitStreet} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="street" value={campus?.shippingAddress.unitStreet} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>

                                <span style={{marginBottom: 10}}>
                                <FormControl style={{margin: 8}}>
                                    <InputLabel shrink={true}>City</InputLabel>
                                    {editing?
                                    <Input id="city" defaultValue={campus?.shippingAddress.city} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="city" value={campus?.shippingAddress.city} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>

                                <span style={{marginBottom: 10}}>
                                <FormControl style={{margin: 8}}>
                                    <InputLabel shrink={true}>State</InputLabel>
                                    {editing?
                                    <Input id="state" defaultValue={campus?.shippingAddress.state} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="state" value={campus?.shippingAddress.state} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>

                                <span style={{marginBottom: 10}}>
                                <FormControl style={{margin: 8}}>
                                    <InputLabel shrink={true}>Zipcode</InputLabel>
                                    {editing?
                                    <Input id="zip" defaultValue={campus?.shippingAddress.zip} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="zip" value={campus?.shippingAddress.zip} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>

                                <span style={{marginBottom: 10}}>
                                <FormControl style={{margin: 8}}>
                                    <InputLabel shrink={true}>Country</InputLabel>
                                    {editing?
                                    <Input id="country" defaultValue={campus?.shippingAddress.country} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="country" value={campus?.shippingAddress.country} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>
                                </div>
                                
                                {/*NON-EDITABLE ITEMS including training manager, staging manager, and hr lead
                                Implemented a drop down menu for each so a new employee can be selected*/}
                                
                                <div style={{margin: 8}}>
                                    <FormControl>
                                        <InputLabel shrink={true}>Training Manager: </InputLabel>
                                        {/*campus.trainingManager.firstName + ' ' + campus.trainingManager.lastName*/}
                                        {editing?
                                        <Input id="tManager" defaultValue={campus?.trainingManager?.firstName + ' ' + campus?.trainingManager?.lastName} disabled={true} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="tManager" value={campus?.trainingManager?.firstName + ' ' + campus?.trainingManager?.lastName} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        }
                                    </FormControl>
                                </div>

                                <div style={{margin: 8}}>
                                    <FormControl>
                                        <InputLabel shrink={true}>Staging Manager: </InputLabel>
                                        {editing?
                                        <Input id="sManager" defaultValue={campus?.stagingManager?.firstName + ' ' + campus?.stagingManager?.lastName} disabled={true} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="sManager" value={campus?.stagingManager?.firstName + ' ' + campus?.stagingManager?.lastName} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        }                               
                                    </FormControl>
                                </div>

                                <div style={{margin: 8}}>
                                    <FormControl>
                                        <InputLabel shrink={true}>Human Resources Lead: </InputLabel>
                                        {editing?
                                        <Input id="hrLead" defaultValue={campus?.hrLead?.firstName + ' ' + campus?.hrLead?.lastName} disabled={true} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="hrLead" value={campus?.hrLead?.firstName + ' ' + campus?.hrLead?.lastName} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        }                                
                                    </FormControl>
                                </div>
                            </div>
                            <br/>
                            {editing?
                            <>
                                <Button style={{ margin: 8 }} variant="outlined" onClick={save}>Save</Button>
                                <Button style={{ margin: 8 }} variant="outlined" onClick={cancel}>Cancel</Button>

                            </>
                            :
                            <FormControl>
                                <Button style={{ margin: 8 }} variant="outlined" onClick={enableEdit}>Edit</Button>
                            </FormControl>}

                            </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="full-card">
                            < MaterialTable
                                columns = {[
                                    //@ts-ignore
                                    { title: 'Name', field: 'name'},
                                    { title: 'Street', field: 'physicalAddress?.unitStreet'},
                                    { title: "Building Manager", field: "trainingLead?.firstName"}                                
                                ]}

                                onRowClick={(event, rowData)=> {
                                    history.push(`/buildings/${rowData?.id}`)
                                }}
                                data = {buildings}
                                title = "Buildings"
                                
                            />

                        </div>
                    </Grid>
                    {/*TABLE OF CORPORATE EMPLOYEES*/}
                    <Grid item xs={12}>
                                {/*Card contains metadata for the building that is not edittable (resourceCreator, resourceCreationDateTime, lastModifer, lastModifiedDateTime, resourceOwner) */}
                                <Card className="full-card">
                                    <span style={{margin: 5}}>
                                        <FormControl>
                                            <InputLabel shrink={true}>Resource Creator: </InputLabel>
                                            <Input value={campus?.resourceMetadata.resourceCreator?.username} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                        <FormControl>
                                            <InputLabel shrink={true}>Time Created: </InputLabel>
                                            <Input value={campus?.resourceMetadata.resourceCreationTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                        <FormControl>
                                            <InputLabel shrink={true}>Last Modifier: </InputLabel>
                                            <Input value={campus?.resourceMetadata.lastModifier?.username} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                        <FormControl>
                                            <InputLabel shrink={true}>Time Modified: </InputLabel>
                                            <Input value={campus?.resourceMetadata.lastModifiedDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                        <FormControl>
                                            <InputLabel shrink={true}>Resource Owner: </InputLabel>
                                            <Input value={campus?.resourceMetadata.resourceOwner?.username} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                        </FormControl>
                                    </span>
                                </Card>  
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        </>
    )

}

export default CampusDetailsComponent;