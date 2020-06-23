import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Grid, FormControl, InputLabel, Input, Card, Button, Typography, Select} from '@material-ui/core';
import MaterialTable from 'material-table';
import { Building } from '../../dtos/building';
import { getBuildingByIdAPI } from '../../remote/building-service';
import { getCampusByOwnerId } from '../../remote/campus-service';

export interface IBuildingDetailsProps {
}

/**
 * Will provide all the details for one specific room, including all the attributes associated with that room.
 * Role needed: Trainer
 * Endpoint: .../rooms/id [id of room]
 */

function BuildingDetailsComponent(props: IBuildingDetailsProps){

        const [editing, setEditing] = useState(false);
        //@ts-ignore
        const [building, setBuilding] = useState(null as Building);
        const [nameState, setName] = useState(building?.name);
        const [abbrNameState, setAbbrName] = useState(building?.abbrName);
        const [addressState, setAddressState] = useState(building?.physicalAddress);
        const [bManagerState, setBManager] = useState(building?.trainingLead);
        const history = useHistory();
         
        /**
         * toggles between editable and non editable state for updating fields 
         */
        const enableEdit = () => {
            setEditing(true);
        }   

        /**
         * persists edited data to MSA and toggled bakc to non editable state 
         * *****NOT IMPLEMENTED****
         */
        const save = () => {
            setBuilding({...building,
                        name: nameState,
                        abbrName: abbrNameState,
                        physicalAddress: addressState,
                        trainingLead: bManagerState
                     })       

            setEditing(false);
        }

        /**
         * does not persist changes and reverts back to original values
         */
        const cancel = () => {
            setEditing(false);
        }

        /**
         * sets pieces of local state on change so they can be persisted
         */
        const setInfo = (event: any) => {
            switch(event.target.id){
                case "name":
                    setName(event.target.value);
                    break;
                case "abbrName":
                    setAbbrName(event.target.value);
                    break;
                case "bManager":
                    setBManager(event.target.value);
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

        /**
         * Gets the building to populate details page from MSA
         * @param id - building id number
         */
        const getBuilding = async (id: number) => {
            let thisBuilding = (await getBuildingByIdAPI(id)).data;
            setBuilding(thisBuilding);
        }

        /**
         * Will be used to update the status of the amenities 
         * ***NOT IMPLEMENTED****
         */
        const updateAmenityStatus = async () => {

        }
        
        /**
         * Populates the page with building determined by the id in the URI
         */
        useEffect(()=> {
            let buildingId = window.location?.pathname?.match(/\d+/)?.pop();
            //@ts-ignore
            getBuilding(+buildingId)

        }, [editing])
            
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
                            <Typography>Building Details</Typography>
                            <div id="building-form">

                                <div style={{ margin: 8 }}>
                                    <FormControl>
                                        <InputLabel shrink={true}>Building Name: </InputLabel>
                                        {editing?
                                        <Input id="name" defaultValue={building?.name} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="name" value={building?.name} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />
                                        }
                                    </FormControl>
                                </div>

                                <div style={{ margin: 8 }}>
                                    <FormControl>
                                        <InputLabel shrink={true}>Abbreviated Name: </InputLabel>
                                        {editing?
                                        <Input id="abbrName" defaultValue={building?.abbrName} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="abbrName" value={building?.abbrName} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />
                                        }
                                    </FormControl>
                                </div>

                                <div style={{margin: 8}}>
                                
                                    <span style={{marginBottom: 10}}>
                                    <InputLabel shrink={true}>Address:</InputLabel>
                                    <FormControl style={{margin: 8}}>
                                        <InputLabel shrink={true}>Street</InputLabel>
                                        {editing?
                                        <Input id="street" defaultValue={building?.physicalAddress.unitStreet} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="street" value={building?.physicalAddress.unitStreet} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                        }          
                                    </FormControl>
                                    </span>

                                    <span style={{marginBottom: 10}}>
                                    <FormControl style={{margin: 8}}>
                                        <InputLabel shrink={true}>City</InputLabel>
                                        {editing?
                                        <Input id="city" defaultValue={building?.physicalAddress.city} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="city" value={building?.physicalAddress.city} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                        }          
                                    </FormControl>
                                    </span>

                                    <span style={{marginBottom: 10}}>
                                    <FormControl style={{margin: 8}}>
                                        <InputLabel shrink={true}>State</InputLabel>
                                        {editing?
                                        <Input id="state" defaultValue={building?.physicalAddress.state} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="state" value={building?.physicalAddress.state} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                        }          
                                    </FormControl>
                                    </span>

                                    <span style={{marginBottom: 10}}>
                                    <FormControl style={{margin: 8}}>
                                        <InputLabel shrink={true}>Zipcode</InputLabel>
                                        {editing?
                                        <Input id="zip" defaultValue={building?.physicalAddress.zip} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="zip" value={building?.physicalAddress.zip} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                        }          
                                    </FormControl>
                                    </span>

                                    <span style={{marginBottom: 10}}>
                                    <FormControl style={{margin: 8}}>
                                        <InputLabel shrink={true}>Country</InputLabel>
                                        {editing?
                                        <Input id="country" defaultValue={building?.physicalAddress.country} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                        <Input id="country" value={building?.physicalAddress.country} onChange={setInfo} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                        }          
                                    </FormControl>
                                    </span>
                                    </div>

                                    {/* NON-EDITABLE ITEM
                                    should implement a drop down menu to select a new building manager*/}
                                    
                                    <div style={{ margin: 8 }}>
                                        <FormControl>
                                            <InputLabel shrink={true}>Building Manager: </InputLabel>
                                            {editing?
                                            <Input id="bManager" defaultValue={building?.trainingLead?.firstName} onChange={setInfo} disabled={true} inputProps={{ 'aria-label': 'description' }} />:
                                            <Input id="bManager" value={building?.trainingLead?.firstName} onChange={setInfo} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                            }
                                        </FormControl>
                                    </div>
                            </div>
                            <br/>
                            {editing?
                            <>
                                <Button id="saveButton" style={{ margin: 8 }} variant="outlined" onClick={save}>Save</Button>
                                <Button id="cancelButton" style={{ margin: 8 }} variant="outlined" onClick={cancel}>Cancel</Button>

                            </>
                            :
                            <FormControl>
                                <Button id="enableEdittingButton" style={{ margin: 8 }} variant="outlined" onClick={enableEdit}>Edit</Button>
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
                                        <Select>
                                            <option>Select a value</option>
                                            <option>OK</option>
                                            <option>LOW</option>
                                            <option>OUT</option>
                                        </Select>
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
                                    <InputLabel shrink={true}>Resource Creator: </InputLabel>
                                    <Input value={building?.resourceMetadata?.resourceCreator.username} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel shrink={true}>Time Created: </InputLabel>
                                    <Input value={building?.resourceMetadata?.resourceCreationDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel shrink={true}>Last Modifier: </InputLabel>
                                    <Input value={building?.resourceMetadata?.lastModifier.username} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel shrink={true}>Time Modified: </InputLabel>
                                    <Input value={building?.resourceMetadata?.lastModifiedDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                </span>
                                <span style={{margin: 5}}>
                                <FormControl>
                                    <InputLabel shrink={true}>Resource Owner: </InputLabel>
                                    <Input value={building?.resourceMetadata?.resourceOwner.username} disabled={true} inputProps={{ 'aria-label': 'description' }} />
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