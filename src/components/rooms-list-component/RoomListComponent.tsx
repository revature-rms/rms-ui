import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Room } from '../../dtos/room';
import { Campus } from '../../dtos/campus';
import { getCampusByOwnerId } from '../../remote/campus-service';
import { Building } from '../../dtos/building';
import { getBuildingByOwnerId } from '../../remote/building-service';
import { getRoomByOwnerId } from '../../remote/room-service';
import { AppUser } from '../../dtos/appUser';


export interface IRoomListProps {
    currentUser: AppUser
}

function RoomListComponent(props: IRoomListProps) {

    const [rooms, setRooms] = useState<Array<Room>>([]);
    const history = useHistory();
    let myRooms: Array<Room> = [];

    const getCampuses = async (id: number) => {
        let campusList: Array<Campus> = (await getCampusByOwnerId(id)).data;
        if(campusList.length > 0){
            campusList.forEach(campus => {
                campus.buildings.forEach(building => {
                    building.rooms.forEach(room => {
                        myRooms.push(room);
                    });
                });
            });
        }
    }

    const getBuildings = async (id: number) => {
        let buildingList: Array<Building> = (await getBuildingByOwnerId(id)).data;
        if(buildingList.length > 0){
            buildingList.forEach(building => {
                building.rooms.forEach(room => {
                    myRooms.push(room);
                });
            })
        }
    }
    
    const getRooms = async (id: number) => {
        let roomList: Array<Room> = (await getRoomByOwnerId(id)).data;
        if(roomList.length > 0) {
            roomList.forEach(room => {
                myRooms.push(room);
            })
        }
    }

    useEffect(() => {

        getRooms(props.currentUser.id);
        getBuildings(props.currentUser.id);
        getCampuses(props.currentUser.id);
        setRooms(myRooms);

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