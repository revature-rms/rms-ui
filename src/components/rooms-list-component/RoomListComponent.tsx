import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Room } from '../../dtos/room';
import { Campus } from '../../dtos/campus';
import { getCampusByOwnerId } from '../../remote/campus-service';
import { Building } from '../../dtos/building';
import { getBuildingByOwnerId } from '../../remote/building-service';
import { getRoomByOwnerId, getAllRoomsAPI } from '../../remote/room-service';
import { AppUser } from '../../dtos/appUser';



export interface IRoomListProps {
    currentUser: AppUser
}

/**
 * Will provide all the rooms that are owned by the current logged in user or on their currently owned campus or building
 * Each room will be rendered with RoomDetailsComponent when it is clicked
 * Role needed: Admin or Training Site Manager or Building Manager or Trainer
 * Endpoint: .../rooms
 */
function RoomListComponent(props: IRoomListProps) {

    const [rooms, setRooms] = useState<Array<Room>>([]);
    const history = useHistory();
    let myRooms: Array<Room> = [];

    /**
     * Gets any campus owned by the current logged in user and extracts rooms if they are a TSM
     */
    const getCampuses = async () => {
        let campusList: Array<Campus> = (await getCampusByOwnerId(props.currentUser?.id)).data;
        campusList.forEach(campus => {
            campus.buildings.forEach(building => {
                building.rooms.forEach(room => {
                    myRooms.push(room);
                });
            });
        });
        setRooms(myRooms);
    }

    /**
     * Gets any building owned by the current logged in user and extracts rooms if they are a building manager
     */
    const getBuildings = async () => {
        let buildingList: Array<Building> = (await getBuildingByOwnerId(props.currentUser?.id)).data;
        buildingList.forEach(building => {
            building.rooms.forEach(room => {
                myRooms.push(room);
            });
        })
        setRooms(myRooms);
    }
    
    /**
     * Gets any rooms owned by the current logged in user if they are a trainer
     */
    const getRooms = async () => {
        let roomList: Array<Room> = (await getRoomByOwnerId(props.currentUser?.id)).data;
        roomList.forEach(room => {
            console.log(room)
            myRooms.push(room);
        })
        setRooms(myRooms);
    }

    /**
     * Gets all rooms if the current logged in user is an admin
     */
    const getAllRooms = async () => {
        let roomList: Array<Room> = (await getAllRoomsAPI()).data;
        roomList.forEach(room => {
            myRooms.push(room);
        })

        setRooms(myRooms);
    }

    /**
     * Renders rooms owned by the current user depending on their role
     */
    useEffect(() => {
        if(props.currentUser?.role.includes("Admin")){
            getAllRooms();
        } else if(props.currentUser?.role.includes("Training Site Manager")){
            getCampuses();
        } else if(props.currentUser?.role.includes("Building Manager")){
            getBuildings();
        } else if(props.currentUser?.role.includes("Trainer")){
            getRooms();
        }
    }, []);


    return (
        <>
        {/**
         * renders a material table including room number, max occupancy, and is active field 
         * each row is clickable and takes you to the endpoint for that rooms detail page
         */}
            <div className="display-wrapper">
                <Card>
                    <div className="table-wrapper">
                        < MaterialTable
                            columns={[
                                { title: 'Room Number', field: 'roomNumber'},
                                { title: 'Max Occupancy', field: 'maxOccupancy'},
                                { title: 'Active', field: 'isActive'}
                            ]}
                            
                            onRowClick={(event, rowData) => {
                                //@ts-ignore
                                history.push('/rooms/' + rowData.id)
                            }}
                            data={rooms}
                            title="Rooms"
                        />
                    </div>
                </Card>
            </div>
        </>
    )

}

export default RoomListComponent;