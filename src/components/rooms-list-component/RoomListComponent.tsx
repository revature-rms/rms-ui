import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Room } from '../../dtos/room';
import { Campus } from '../../dtos/campus';
import { Building } from '../../dtos/building';
import { findAllRoomByOwner, findAllRooms, findAllCampusesByOwner, findBuildingByOwner } from '../../remote/search-service';
import { AppUser } from '../../dtos/appUser';



export interface IRoomListProps {
    currentUser: AppUser
}

function RoomListComponent(props: IRoomListProps) {

    const [rooms, setRooms] = useState<Array<Room>>([]);
    const history = useHistory();
    let myRooms: Array<Room> = [];

    const getCampuses = async () => {
        let campusList: Array<Campus> = (await findAllCampusesByOwner(props.currentUser?.id)).data;
        campusList.forEach(campus => {
            campus.buildings.forEach(building => {
                building.rooms.forEach(room => {
                    myRooms.push(room);
                });
            });
        });
        setRooms(myRooms);
    }

    const getBuildings = async () => {
        let buildingList: Array<Building> = (await findBuildingByOwner(props.currentUser?.id)).data;
        buildingList.forEach(building => {
            building.rooms.forEach(room => {
                myRooms.push(room);
            });
        })
        setRooms(myRooms);
    }
    
    const getRooms = async () => {
        let roomList: Array<Room> = (await findAllRoomByOwner(props.currentUser?.id)).data;
        roomList.forEach(room => {
            console.log(room)
            myRooms.push(room);
        })
        setRooms(myRooms);
    }

    const getAllRooms = async () => {
        let roomList: Array<Room> = (await findAllRooms()).data;
        roomList.forEach(room => {
            myRooms.push(room);
        })

        setRooms(myRooms);
    }

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