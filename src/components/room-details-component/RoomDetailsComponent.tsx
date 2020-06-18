import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { AppUser } from '../../dtos/appUser';
import { Grid, Card, FormControl, InputLabel, Input, Button, Switch, Select, FormHelperText, FormControlLabel, Checkbox, Typography, Breadcrumbs } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Room } from '../../dtos/room';
import { RoomStatus } from '../../dtos/roomStatus';
import { Batch } from '../../dtos/batch';
import { WorkOrder } from '../../dtos/workOrder';
import { ResourceMetadata } from '../../dtos/resourceMetadata';
import { Employee } from '../../dtos/employee';
import { Link } from 'react-router-dom';



export interface IRoomDetailsProps {
    authUser: AppUser
}

function RoomDetailsComponent() {

    //@ts-ignore
    const[room, setRoom] = useState<Room>(null as Room);
    const[editing, setEditing] = useState(false);
    const[roomNum, setRoomNum] = useState<number>(0);
    const[maxOcc, setMaxOcc] = useState<number>(0);
    //@ts-ignore
    const[status, setStatus] = useState<RoomStatus>(null as RoomStatus);
    const[whiteboardStatus, setWhitboardStatus] = useState(false);
    const[desksStatus, setDesksStatus] = useState(false);
    const[chairsdStatus, setChairsStatus] = useState(false);
    //@ts-ignore
    const[workOrder, setWorkOrder] = useState<WorkOrder>(null as WorkOrder);
    const[isActive, setIsActive] = useState<boolean>(false);


    //toggles between editing and non-editing mode
    const enableEdit = () => {
        setEditing(true);
    }   

    //saves states upon clicking save button ... NEEDS TO PERSIST
    const save = () => {
        setRoom({...room,
                    
                 })       

        setEditing(false);
    }

    /**
     * toggles back to non-editing state upon clicking cancle button
     */
    const cancel = () => {
        setEditing(false);
    }

    /**
     * Sets room details state upon changing in edit mode
     */
    const setInfo = (event: any) => {
        switch(event.target.id){
            case "roomNumber":
                setRoomNum(event.target.value);
                break;
            case "maxOccupancy":
                setMaxOcc(event.target.value);
                break;
        }
    }

    /**
     * Changes state for Room Status Form upon selection of checkboxes
     */
    const checkedBoxes = (event: any) => {
        console.log("Update");
        switch(event.target.id){
            case "whiteboardCleaned":
                setWhitboardStatus(event.target.value);
                break;
            case "chairsOrdered":
                setChairsStatus(event.target.value);
                break;
            case "desksCleaned":
                setDesksStatus(event.target.value);
                break;
                
        }
    }

    const newRoomStatus = (event: any) => {
    }

    const createWorkOrder = (event: any) => {
        //Work order logic needed
    }

    //makes a request to the API for all campuses and selects user assigned campus
    // const getRoom = async() => {
        
    // }


    useEffect(() => {
        //@ts-ignore
        let mockRoom = new Room(1, 123, 67, false, new RoomStatus(1, false, true, false, new Date, null as Employee, "This is a test"), null as Batch, null as WorkOrder, null as ResourceMetadata)
        setRoom(mockRoom)
        console.log(room)
    },[])  

    return (
        <>
            <div className="table-wrapper">
                <Grid container spacing={2}>

                    {/* Title of page renders in format 'Room #: <RoomNumber>'*/}
                    <Grid item xs={12}>
                            <Typography variant="h2">Room #: {room?.roomNumber}</Typography>
                    </Grid>

                    {/* Breadcrumbs for parent building and parent campus
                    should only render building for building manager and only current room for trainers 
                    ***NON-FUNCTIONAL*** need to store campus and buildings state in order to render and linnk to correct pages */}
                    <Grid item xs={12}>
                        <Breadcrumbs>
                        <Link to="">
                        Campus
                        </Link>
                        <Link to="">
                        Building 
                        </Link>
                        <Typography>{room?.roomNumber}</Typography>
                        </Breadcrumbs>
                    </Grid>


                    {/*Contains the edittable room details (name, abbreviated name, address, building manager)
                        of the building which should become edittable upon clicking edit button and should save to local state upon clicking save button 
                        - need to persist data upon save
                        - need to save editting authUser for metadata
                    */}
                    <Grid item xs={12}>
                        
                            <Card className="full-card">
                            <Typography>Room Details</Typography>
                            <div id="room-form">

                                <span style={{margin: 5}}>
                                <InputLabel>Room Number: </InputLabel>
                                <FormControl style={{ margin: 8 }} >
                                    {editing?
                                    <Input id="roomNumber" defaultValue={room?.roomNumber} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="roomNumber" value={room?.roomNumber} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                </FormControl>
                                </span>

                                <span style={{margin: 5}}>
                                <InputLabel>Max Occupancy: </InputLabel>
                                <FormControl style={{ margin: 8 }} >
                                    {editing?
                                    <Input id="maxOccupancy" value={room?.maxOccupancy} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="maxOccupancy" defaultValue={room?.maxOccupancy} disabled={!editing} inputProps={{ 'aria-label': 'description' }} />
                                    }
                                </FormControl>
                                </span>
                                
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

                    {/* Contains Work orders, room status, and room transfer forms */}
                    <Grid item xs={12}>
                        <Grid container spacing={2}>        
                            <Grid item xs={8}>

                                {/* Contains Work order form, ***NONFUNCTIONAL */}
                                <Card className="full-card">
                                    <Typography>Work Order</Typography>
                                        
                                    <FormControl style={{ margin: 8 }}>
                                        <TextField id="standard-basic" label="Contact Email"/>
                                    </FormControl>
                                    <br/>

                                    <FormControl style={{ margin: 8 }}>
                                        <InputLabel>Category</InputLabel>
                                        <Select native onChange={createWorkOrder} name="Category" label="Category">
                                            <option aria-label="None" value=""/>
                                            <option>Lighting</option>
                                            <option>Air Conditionong</option>
                                            <option>Doors</option>
                                            <option>Projector</option>
                                            <option>Other</option>
                                        </Select>
                                    </FormControl>
                                    <br/>

                                    <TextField style={{ margin: 8 }} label="Description" multiline fullWidth/>    
                                    <br/>

                                    <Button style={{ margin: 8 }} variant="outlined" onClick={createWorkOrder}>Submit</Button>
                                </Card>

                                {/* Contains room transfer form, ***NONFUNCTIONAL */}
                                <Card className="full-card">
                                    <Typography>Room Transfer</Typography> 
                                    <Button style={{ margin: 8 }} variant="outlined" onClick={createWorkOrder}>Submit</Button>
                                </Card>   
                            </Grid>
                            
                            {/* Contains Room Status Form, ***NONFUNCTIONAL */}
                            <Grid item xs={4}>
                                <Card className="full-card">
                                    <Typography>Room Status</Typography>

                                    <FormControl>
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                //defaultChecked={room.currentStatus.whiteboardCleaned}
                                                // onChange={checkedBoxes}
                                                name="whiteboardCleaned"
                                                color="primary"
                                                style={{ margin: 8 }} 
                                            />
                                            }
                                            label="Whiteboard Cleaned"
                                        />

                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                // defaultChecked={room.currentStatus.chairsOrdered}
                                                // onChange={checkedBoxes}
                                                name="chairsOrdered"
                                                color="primary"
                                                style={{ margin: 8 }} 
                                            />
                                            }
                                            label="Chairs Ordered"
                                        />

                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                // defaultChecked={room.currentStatus.desksCleaned}
                                                // onChange={checkedBoxes}
                                                name="desksCleaned"
                                                color="primary"
                                                style={{ margin: 8 }} 
                                            />
                                            }
                                            label="Desks Cleaned"
                                        />
                                    </FormControl>

                                    <div style={{ margin: 8}} >
                                        <TextField label="Notes" multiline fullWidth/>
                                    </div>

                                    <Button style={{ margin: 8 }} variant="outlined" onClick={createWorkOrder}>Submit</Button>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>


                    {/*Contains metadata for the building that is not edittable (resourceCreator, resourceCreationDateTime, lastModifer, lastModifiedDateTime, resourceOwner) */}
                    <Grid item xs={12}>
                        <Card className="full-card">

                            <span style={{margin: 5}}> 
                            <FormControl>
                                <InputLabel>Resource Creator: </InputLabel>
                                <Input value={"room?.resourceMetadata.resourceCreator"} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                            </FormControl>
                            </span>

                            <span style={{margin: 5}}>
                            <FormControl>
                                <InputLabel>Time Created: </InputLabel>
                                <Input value={"room?.resourceMetadata.resourceCreationTime"} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                            </FormControl>
                            </span>

                            <span style={{margin: 5}}>
                            <FormControl>
                                <InputLabel>Last Modifier: </InputLabel>
                                <Input value={"room?.resourceMetadata.lastModifier"} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                            </FormControl>
                            </span>

                            <span style={{margin: 5}}>
                            <FormControl>
                                <InputLabel>Time Modified: </InputLabel>
                                <Input value={"room?.resourceMetadata.lastModifiedDateTime"} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                            </FormControl>
                            </span>

                            <span style={{margin: 5}}>
                            <FormControl>
                                <InputLabel>Resource Owner: </InputLabel>
                                <Input value={"room?.resourceMetadata.resourceOwner"} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                            </FormControl>
                            </span>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}

export default RoomDetailsComponent;