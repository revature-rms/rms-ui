import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link, useHistory } from "react-router-dom";
import { getAllCampusAPI } from '../../remote/campus'
import MaterialTable from 'material-table';
import {Campus} from '../../dtos/campus';
import { AppUser } from '../../dtos/appUser';
import { Building } from '../../dtos/building';
import { Grid, Card, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { Address } from '../../dtos/address';
import { Employee } from '../../dtos/employee';
import { ResourceMetadata } from '../../dtos/resourceMetaData';


export interface ICampusDetailsProps {
    authUser: AppUser
}

function CampusDetailsComponent() {

    //@ts-ignore
    const[campus, setCampus] = useState<Campus>(null as Campus);
    const [editting, setEdditing] = useState(false);
    const[buildings, setBuildings] = useState<Building[]>([]);
    const[nameState, setNameState] = useState<string>('');
    const[abbrNameState, setAbbrNameState] = useState<string>('');
    //@ts-ignore
    const[tManagerState, setTManagerState] = useState<Employee>(null as Employee);
    //@ts-ignore
    const[sManagerState, setSManagerState] = useState<Employee>(null as Employee);
    //@ts-ignore
    const[hrLeadState, setHrLeadState] = useState<Employee>(null as Employee);
    //@ts-ignore
    const[addressState, setAddressState] = useState<Address>(null as Address);
    const history = useHistory();



    const enableEdit = () => {
        setEdditing(true);
    }   

    const save = () => {
        setCampus({...campus,
                    name: nameState,
                    abbrName: abbrNameState,
                    shippingAddress: addressState,
                    trainingManager: tManagerState,
                    stagingManager: sManagerState,
                    hrLead: hrLeadState
                 })       

        setEdditing(false);
    }

    const cancel = () => {
        setEdditing(false);
    }

    const setInfo = (event: any) => {
        switch(event.target.id){
            case "name":
                setNameState(event.target.value);
                break;
            case "abbrName":
                setAbbrNameState(event.target.value);
                break;
            case "tManager":
                //@ts-ignore
                setTManagerState(new Employee(event.target.value, '', '', '', '', '', null as ResourceMetadata ));
                break;
            case "sManager":
                //@ts-ignore
                setSManagerState (new Employee(event.target.value, '', '', '', '', '', null as ResourceMetadata ));
                break;
            case "hrLead":
                //@ts-ignore
                setHrLeadState(new Employee(event.target.value, '', '', '', '', '', null as ResourceMetadata ));
                break;
            case "street":
                setAddressState({...addressState,
                                unit_street: event.target.value})
                break;
            case "city":
                setAddressState({...addressState,
                                city: event.target.value})
                break;
            case "state":
                setAddressState({...addressState,
                                state: event.target.value})
                break;
            case "zip":
                setAddressState({...addressState,
                                zip: event.target.value})
                break;
            case "country":
                setAddressState({...addressState,
                                country: event.target.value})
                break;

        }
    }

    //makes a request to the api and gets all campus data. Extracts building data to insert into local buildings state
    useEffect(() => {
        let campuses: Array<Campus> = [];
        let tempBuildings: Array<Building> = [];

        //makes a request to the API for all campuses
        const getCampuses = async() => {
            //@ts-ignore
            campuses = await getAllCampusAPI();
            return campuses;
        }

        //extracts buildings from the users assigned campus
        const getBuildings = async () => {
            let campuses = await getCampuses(); 
            
            // campuses.forEach(item => {

            //     if(item.resourceMetadata.resourceOwner.username === props.authUser.username){
            //         setCampus(item)
                    
            //     } else {
            //         throw new Error ('409: You do not have proper credentials for this page')
            //     }
            //     campus.buildings.forEach(building => {
            //         tempBuildings.push(building)
            //     })

            // })

            //MOCK WORKAROUND
            
            let campus = campuses[0]
            campus.buildings.forEach(building => {
                tempBuildings.push(building)
            })

            //@ts-ignore
            setBuildings(tempBuildings)
        }

        getBuildings();

    }, []);
    

    return (
        <>
            <Wrapper data-test="main-content" title={campus.name} elements={campus.abbrName}>
                <Grid container>
                    <Grid item xs={12}>
                        {/*Below card contains the edittable items (name, abbreviated name, address, building manager)
                             of the building which should become edittable upon clicking edit button and should save to local state upon clicking save button 
                                - need to persist data upon save
                                - need to save editting authUser for metadata
                             */}
                            <Card className="full-card">
                            <div id="building-form">

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Campus Name: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="name" defaultValue={campus.name} disabled={!editting} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="name" value={campus.name} disabled={!editting} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Abbreviated Name: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="abbrName" value={campus.abbrName} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="abbrName" defaultValue={campus.abbrName} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Shipping Address: </InputLabel>
                                <span style={{marginBottom: 10}}>
                                <FormControl>
                                    {editting?
                                    <Input id="street" value={campus.shippingAddress.unit_street} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="street" defaultValue={campus.shippingAddress.unit_street} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>
                                <span style={{marginBottom: 10}}>
                                <FormControl>
                                    {editting?
                                    <Input id="city" value={campus.shippingAddress.city} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="city" defaultValue={campus.shippingAddress.city} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>
                                <span style={{marginBottom: 10}}>
                                <FormControl>
                                    {editting?
                                    <Input id="state" value={campus.shippingAddress.state} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="state" defaultValue={campus.shippingAddress.state} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>
                                <span style={{marginBottom: 10}}>
                                <FormControl>
                                    {editting?
                                    <Input id="zip" value={campus.shippingAddress.zip} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="zip" defaultValue={campus.shippingAddress.zip} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>
                                <span style={{marginBottom: 10}}>
                                <FormControl>
                                    {editting?
                                    <Input id="country" value={campus.shippingAddress.country} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="country" defaultValue={campus.shippingAddress.country} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </span>
                                </div>
                                
                                <div style={{marginBottom: 5}}>
                                <InputLabel>Training Manager: </InputLabel>
                                <FormControl>
                                    {/*campus.trainingManager.firstName + ' ' + campus.trainingManager.lastName*/}
                                    {editting?
                                    <Input id="tManager" value={campus.trainingManager.id} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="tManager" defaultValue={campus.trainingManager.id} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Staging Manager: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="sManager" value={campus.stagingManager.id} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="sManager" defaultValue={campus.stagingManager.id} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>HR Lead: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="hrLead" value={campus.hrLead.id} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="hrLead" defaultValue={campus.hrLead.id} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </div>
                            </div>
                            <br/>
                            {editting?
                            <>
                                <Button onClick={save}>Save</Button>
                                <Button onClick={cancel}>Cancel</Button>

                            </>
                            :
                            <FormControl>
                                <Button onClick={enableEdit}>Edit</Button>
                            </FormControl>}

                            </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="full-card">
                            < MaterialTable
                                columns = {[
                                    //@ts-ignore
                                    { title: 'Name', field: 'name', render:rowData=><Link to={`/buildings/${rowData.id}`}>{rowData.name}</Link> },
                                    { title: 'Address', field: 'physicalAddress'},
                                    { title: "Building Manager", field: "trainingLead"}                                
                                ]}
                                //@ts-ignore
                                onRowClick={(event, rowData)=> history.push(`/buildings/${rowData.id}`)}
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
                                        <InputLabel>Resource Creator: </InputLabel>
                                        <Input value={campus.resourceMetadata.resourceCreator} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                    </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                    <FormControl>
                                        <InputLabel>Time Created: </InputLabel>
                                        <Input value={campus.resourceMetadata.resourceCreationTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                    </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                    <FormControl>
                                        <InputLabel>Last Modifier: </InputLabel>
                                        <Input value={campus.resourceMetadata.lastModifier} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                    </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                    <FormControl>
                                        <InputLabel>Time Modified: </InputLabel>
                                        <Input value={campus.resourceMetadata.lastModifiedDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                    </FormControl>
                                    </span>
                                    <span style={{margin: 5}}>
                                    <FormControl>
                                        <InputLabel>Resource Owner: </InputLabel>
                                        <Input value={campus.resourceMetadata.resourceOwner} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                    </FormControl>
                                    </span>
                                </Card>  
                            </Grid>
                        </Grid>
            </Wrapper>
        </>
    )

}

export default CampusDetailsComponent