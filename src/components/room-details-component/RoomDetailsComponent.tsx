import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { AppUser } from '../../dtos/appUser';
import { Grid, Card, FormControl, InputLabel, Input, Button, Switch } from '@material-ui/core';
import { Room } from '../../dtos/room';
import { RoomStatus } from '../../dtos/roomStatus';
import { Batch } from '../../dtos/batch';
import { WorkOrder } from '../../dtos/workOrder';
import { ResourceMetadata } from '../../dtos/resourceMetadata';



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

    //toggles back to non-editing state upon clicking cancle button
    const cancel = () => {
        setEditing(false);
    }

    //sets pieces of info state upon changing in edit mode
    const setInfo = (event: any) => {
        switch(event.target.id){
            case "roomNumber":
                setRoomNum(event.target.value);
                break;
            case "maxOccupancy":
                setMaxOcc(event.target.value);
                break;
            case "isActive":
                setIsActive(event.target.value);
                break;
        }
    }

    //makes a request to the API for all campuses and selects user assigned campus
    // const getRoom = async() => {
        
    // }


    useEffect(() => {
        //@ts-ignore
        let mockRoom = new Room(1, 123, 67, false, null as RoomStatus, null as Batch, null as WorkOrder, null as ResourceMetadata)
        setRoom(mockRoom)

        console.log(room)
    },[])  

    return (
        <>
        <Card>
            <div className="table-wrapper">
            <Wrapper data-test="main-content">
                <Grid container>
                    <Grid item xs={7}>
                        {/*Below card contains the edittable items (name, abbreviated name, address, building manager)
                             of the building which should become edittable upon clicking edit button and should save to local state upon clicking save button 
                                - need to persist data upon save
                                - need to save editting authUser for metadata
                             */}
                            <Card className="full-card">
                            <div id="room-form">

                                <span style={{marginBottom: 5}}>
                                <InputLabel>Room Number: </InputLabel>
                                <FormControl>
                                    {editing?
                                    <Input id="roomNumber" defaultValue={room?.roomNumber} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />:
                                    <Input id="roomNumber" value={room?.roomNumber} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                </FormControl>
                                </span>

                                <span style={{marginBottom: 5}}>
                                <InputLabel>Max Occupancy: </InputLabel>
                                <FormControl>
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
                        <Grid container>
                            <Grid item xs={12}>
                            <div className="full-card"></div>  
                            </Grid>
                            <Grid item xs={12}>
                            <div className="full-card"></div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="full-card">

                        </div>
                    </Grid>

                    <Grid item xs={12}>
                                {/*Card contains metadata for the building that is not edittable (resourceCreator, resourceCreationDateTime, lastModifer, lastModifiedDateTime, resourceOwner) */}
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
            </Wrapper>
            </div>
            </Card>
        </>
    )

}

export default RoomDetailsComponent;