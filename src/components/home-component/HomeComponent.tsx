import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { AppUser } from '../../dtos/appUser';
import { Card, Grid } from '@material-ui/core';
import { findAllCampuses, findAllRoomByOwner } from '../../remote/search-service';

export interface IHomeProps {
    authUser: AppUser | undefined;
}

/**
 * This component is the home page for all users. It will provide some default information to the
 * user depending on their role.
 * Role needed: ANY, will be different depending on each specific role.
 * Endpoint: .../
 * 
 * TODO: currently, this component does not render for TSM's. Conditional rendering will need
 *       to be added for this user as well as the actual rendering for those additional roles.
 *       The dashboard implementations are 'drafts' and are recommended for change.
 * 
 * @param props
 */
export default function HomeComponent(props: IHomeProps) {

    const [campus, setCampus] = useState([]);
    const [associates, setAssociates] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        if (props.authUser?.role?.includes("Admin")) getBuildings();
        if (props.authUser?.role?.includes("Training Site Manager")) getBuildings();
        if (props.authUser?.role?.includes("Trainer")) getAssociates();
        if (props.authUser?.role?.includes("Building Manager")) getRooms();
    }, []);

    const getBuildings = async () => {
        // await getCampuses();
        let campuses;
        // mock data
        campuses = (await findAllCampuses()).data;

        console.log("campuses", campuses)
        //@ts-ignore
        setCampus(campuses)
    }

    const getRooms = async () => {
        //@ts-ignore
        let rooms = (await findAllRoomByOwner(props?.authUser?.id)).data.rooms;
        console.log(rooms)
        setRooms(rooms)
    }

    const getAssociates = () => {
        let associates = [
            { name: 'Jim Bob' },
            { name: 'John Doe' },
            { name: 'Name 3' }
        ]
        console.log(associates)
        //@ts-ignore
        setAssociates(associates);
    }

    //Home page rendering for an admin user.
    return (
        <>
            <div className="display-wrapper">
                <Grid container spacing={2}>
                    {props.authUser?.role?.includes('Admin') ?
                        <Grid item xs={12}>
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
                        </Grid>
                        : <></>}
                    {props.authUser?.role?.includes('Trainer') ?
                        <Grid item xs={12}>
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
                        </Grid>
                        : <></>}
                    {props.authUser?.role?.includes('Building Manager') ?
                        <Grid item xs={12}>
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
                        </Grid>
                        : <></>}
                    {props.authUser?.role?.includes('Training Site Manager') ?
                        <Grid item xs={12}>
                            <Card>
                                <div className="table-wrapper">
                                    < MaterialTable
                                        columns={[
                                            { title: 'Campus Name', field: 'name' },
                                            { title: 'Training Manager', field: 'trainingManagerId' },
                                            { title: 'Number of Buildings', field: 'buildings.length' }
                                        ]}
                                        data={campus}
                                        title="Placeholder table -- same as admin view"
                                    />
                                </div>
                            </Card>
                        </Grid>
                        : <></>}
                </Grid>
            </div>
        </>
    )
}
//Trainer --> room, batch
//Site Manager --> Campus, building
//Building Manager --> building, room 