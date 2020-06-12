import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Grid, FormControl, InputLabel, Input, Card, Button } from '@material-ui/core';
import { userInfo } from 'os';
import { userState } from '../../reducers/login-reducer';
import MaterialTable from 'material-table';

export interface IBuildingDetailsProps {
    thisBuilding: any
}

function BuildingDetailsComponent(){

        const mockBuilding =  {id: 1, 
                            name: "Muma College of Business",
                            abbrName: "MCB",
                            physicalAddress: "456 N Main st",
                            trainingLead: "Bob",
                            amenities: [{ type: "coffee",
                                        status: "low"
                                        },
                                        { type: "whiteboard",
                                        status: "clean"
                                        }],
                            rooms: [{ id: 1,
                                    roomNumber: "2035",
                                    maxOccupancy: 30,
                                    isActive: false
                                    },
                                    {id: 2,
                                    roomNumber: "1005",
                                    maxOccupancy: 15,
                                    isActive: true
                                    }],
                            resourceMetadata: {resourceCreator: "John",
                                                resourceCreationDateTime: "2020-03-03T13:22:31+00.00",
                                                lastModifer: "Jeremy",
                                                lastModifiedDateTime: "2020-03-05T10:21:35+00.00",
                                                resourceOwner: "Abe"

                                                }
        }

        const [editting, setEdditing] = useState(false);
        const [nameState, setName] = useState(mockBuilding.name);
        const [abbrNameState, setAbbrName] = useState(mockBuilding.abbrName);
        const [addressState, setAddress] = useState(mockBuilding.physicalAddress);
        const [bManagerState, setBManager] = useState(mockBuilding.trainingLead);
        const [building, setBuilding] = useState(mockBuilding)
           
        const enableEdit = () => {
            setEdditing(true);
        }   

        const save = () => {
            setBuilding({...mockBuilding,
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
        
        
        return (
            <>
                {/* Wrapper component is imported from utils/div-wrapper */}
                <Wrapper data-test="main-content" title={mockBuilding.name} elements={mockBuilding.abbrName}>
                    <Grid container spacing={1}>
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
                                    <Input id="name" defaultValue={building.name} disabled={!editting} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="name" value={building.name} disabled={!editting} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Abbreviated Name: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="abbrName" value={building.abbrName} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="abbrName" defaultValue={building.abbrName} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </div>

                                <div style={{marginBottom: 5}}>
                                <InputLabel>Address: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="address" value={building.physicalAddress} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="address" defaultValue={building.physicalAddress} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                    }          
                                </FormControl>
                                </div>
                                
                                <div style={{marginBottom: 5}}>
                                <InputLabel>Building Manager: </InputLabel>
                                <FormControl>
                                    {editting?
                                    <Input id="bManager" value={building.trainingLead} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="bManager" defaultValue={building.trainingLead} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
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

                        <Grid item xs={6}>
                            {/*Material table for room data, room number should be a clickable link to take to room details page */}
                            <Card className="full-card">
                                < MaterialTable

                                    columns = {[
                                    { title: 'Room Number', field: 'roomNumber', render:rowData=><Link to={`/rooms/${rowData.id}`}>{rowData.roomNumber}</Link>},
                                        { title: 'Max Occupancy', field: 'maxOccupancy' },
                                        { title: 'Active', field: 'isActive'} 
                                        
                                    ]}
                                    data = {mockBuilding.rooms}
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
                                    data = {mockBuilding.amenities}
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
                                    <Input value={mockBuilding.resourceMetadata.resourceCreator} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Time Created: </InputLabel>
                                    <Input value={mockBuilding.resourceMetadata.resourceCreationDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Last Modifier: </InputLabel>
                                    <Input value={mockBuilding.resourceMetadata.lastModifer} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Time Modified: </InputLabel>
                                    <Input value={mockBuilding.resourceMetadata.lastModifiedDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel>Resource Owner: </InputLabel>
                                    <Input value={mockBuilding.resourceMetadata.resourceOwner} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                            </Card>  
                        </Grid>

                    </Grid>
                </Wrapper>
            </>
        )
}

export default BuildingDetailsComponent;