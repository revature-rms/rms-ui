import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Grid, FormControl, InputLabel, Input, Card, Button, Typography} from '@material-ui/core';
import MaterialTable from 'material-table';
import { Building } from '../../dtos/building';
import { getBuildingByIdAPI } from '../../remote/building-service';

export interface IBuildingDetailsProps {
}

function BuildingDetailsComponent(props: IBuildingDetailsProps){

        const [editting, setEdditing] = useState(false);
        //@ts-ignore
        const [building, setBuilding] = useState(null as Building);
        const [nameState, setName] = useState(building?.name);
        const [abbrNameState, setAbbrName] = useState(building?.abbrName);
        const [addressState, setAddress] = useState(building?.physicalAddress);
        const [bManagerState, setBManager] = useState(building?.trainingLead);
        const history = useHistory();
           
        const enableEdit = () => {
            setEdditing(true);
        }   

        const save = () => {
            setBuilding({...building,
                        name: nameState,
                        abbrName: abbrNameState,
                        physicalAddress: addressState,
                        trainingLead: bManagerState
                     })       

            setEdditing(false);
        }

        const cancel = () => {
            setEdditing(false);
        }

        const setInfo = (event: any) => {
            switch(event.target.id){
                case "name":
                    setName(event.target.value);
                    break;
                case "abbrName":
                    setAbbrName(event.target.value);
                    break;
                case "address":
                    setAddress(event.target.value);
                    break;
                case "bManager":
                    setBManager(event.target.value);
                    break;
            }
        }

        const getBuilding = async (id: number) => {
            let thisBuilding = (await getBuildingByIdAPI(id)).data;
            setBuilding(thisBuilding);
        }
        
        useEffect(()=> {
            let buildingId = window.location?.pathname?.match(/\d+/)?.pop();
            //@ts-ignore
            getBuilding(+buildingId);
        }, [])
        
        return (
            <>
            <div className="display-wrapper">
                <Card>
                <div className="table-wrapper">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h2">{building?.name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/*Below card contains the edittable items (name, abbreviated name, address, building manager)
                             of the building which should become edittable upon clicking edit button and should save to local state upon clicking save button 
                                - need to persist data upon save
                                - need to save editting authUser for metadata
                             */}
                            <Card className="full-card">
                            <div id="building-form">

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Building Name: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="name" defaultValue={building?.name} disabled={!editting} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="name" value={building?.name} disabled={!editting} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Abbreviated Name: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="abbrName" value={building?.abbrName} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="abbrName" defaultValue={building?.abbrName} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Address: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="address" value={building?.physicalAddress} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="address" defaultValue={building?.physicalAddress} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </div>
                                
                                <div style={{marginBottom: 5}}>
                                <InputLabel>Building Manager: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="bManager" value={building?.trainingLead} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="bManager" defaultValue={building?.trainingLead} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
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

                        <Grid item xs={7}>
                            {/*Material table for room data, room number should be a clickable link to take to room details page */}
                            <Card className="full-card">
                                < MaterialTable

                                    columns = {[
                                        { title: 'Room Number', field: 'roomNumber'},
                                        { title: 'Max Occupancy', field: 'maxOccupancy' },
                                        { title: 'Active', field: 'isActive'} 
                                        
                                    ]}
                                    //@ts-ignore
                                    onRowClick={(event, rowData)=> history.push(`/rooms/` + rowData.id)}
                                    data = {building?.rooms}
                                    title = "Rooms"
                                    
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={5}>
                            {/*Material table for amenitites data, status should be edittable with a drop down*/}
                            <Card className="full-card">
                                < MaterialTable
                                    options={{
                                        
                                    }}
                                
                                    columns = {[
                                        { title: 'Type', field: 'type'},
                                        { title: 'Status', field: 'status', render: rowData=> (<>
                                        <select>
                                            <option>Select a value</option>
                                            <option>OK</option>
                                            <option>LOW</option>
                                            <option>OUT</option>
                                        </select>
                                        </>) },                           
                                    ]}
                                    data = {building?.amenities}
                                    title = "Amenities"
                                    
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            {/*Card contains metadata for the building that is not edittable (resourceCreator, resourceCreationDateTime, lastModifer, lastModifiedDateTime, resourceOwner) */}
                            <Card className="full-card">
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Resource Creator: </InputLabel>
                                    <Input value={building?.resourceMetadata?.resourceCreator} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Time Created: </InputLabel>
                                    <Input value={building?.resourceMetadata?.resourceCreationDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Last Modifier: </InputLabel>
                                    <Input value={building?.resourceMetadata?.lastModifier} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Time Modified: </InputLabel>
                                    <Input value={building?.resourceMetadata?.lastModifiedDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Resource Owner: </InputLabel>
                                    <Input value={building?.resourceMetadata?.resourceOwner} disabled={true} inputProps={{ 'aria-label': 'description' }} />
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

export default BuildingDetailsComponent;