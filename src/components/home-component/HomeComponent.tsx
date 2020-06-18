import React, { useState, useEffect } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';
import { AppUser } from '../../dtos/appUser';
import { prependOnceListener } from 'process';
import { roomList } from '../../remote/room-list-search';
import { Card } from '@material-ui/core';
import { getAllCampusAPI } from '../../remote/campus-service';

export interface IHomeProps {
    authUser: AppUser;
}

/**
 * This component is the home page for all users. It will provide some default information to the
 * user depending on their role.
 * 
 * TODO: currently, this component does not render for TSM's. Conditional rendering will need
 *       to be added for this user as well as the actual rendering for those additional roles.
 *       The dashboard implementations are 'drafts' and are recommended for change.
 * 
 * @param props
 */
export function HomeComponent(props: IHomeProps) {

    const [campus, setCampus] = useState([]);
    const [associates, setAssociates] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // if (props.authUser.role == "Admin") getBuildings();
        // if (props.authUser.role == "Trainer") getAssociates();
        // if (props.authUser.role == "Building Manager") getRooms();
    }, []);

    const getBuildings = async () => {
        // await getCampuses();
        let campuses;
        // mock data
        campuses = (await getAllCampusAPI()).data;

        console.log("campuses", campuses)
        //@ts-ignore
        setCampus(campuses)
    }

    const getRooms = async () => {

        let rooms = await roomList();
        setRooms(rooms)
    }

    const getAssociates = () => {
        let associates = [
            { name: 'a' },
            { name: 'b' },
            { name: 'c' }
        ]
        console.log(associates)
        //@ts-ignore
        setAssociates(associates);
    }

    //Home page rendering for an admin user.
    return (
        <>
            {props.authUser?.role == 'Admin' ?
                <Card>
                    <div className="table-wrapper">
                        < MaterialTable
                            columns={[
                                { title: 'Campus Name', field: 'name' },
                                { title: 'Training Manager', field: 'trainingManagerId' },
                                { title: 'Number of Buildings', field: 'buildings.length' }
                            ]}
                            data={campus}
                            title="Campus"
                        />
                    </div>
                </Card>
                : props.authUser?.role == 'Trainer' ?
                    <Card>
                        <div className="table-wrapper">
                            < MaterialTable
                                columns={[
                                    { title: 'Associate Name', field: 'name' }
                                ]}
                                data={associates}
                                title="Associates"

                            />
                        </div>
                    </Card>
                    : props.authUser?.role == 'Building Manager' ?
                        <Card>
                            <div className="table-wrapper">
                                < MaterialTable
                                    columns={[
                                        { title: 'Room Number', field: 'roomNumber' },
                                        { title: 'Room Occupancy', field: 'maxOccupancy' }
                                    ]}
                                    data={rooms}
                                    title="Rooms"

                                />
                            </div>
                        </Card>
                        : props.authUser?.role == 'Training Site Manager' ? <></>
                            : <></>
            }
        </>
    )
}
//Trainer --> room, batch
//Site Manager --> Campus, building
//Building Manager --> building, room 