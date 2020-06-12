import React, { useState, useEffect } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';
import {getAllcampusAPI} from '../../remote/campus'
import { AppUser } from '../../dtos/appUser';
import { prependOnceListener } from 'process';
import { roomList } from '../../remote/room-list-search';

export interface IHomeProps {
    authUser: AppUser;
}

/**
 * This component is the home page for all users. It will provide some default information to the
 * user depending on their role.
 * 
 * TODO: currently, this component only renders for an admin. Conditional rendering will need
 *       to be added as well as the actual rendering for those additional roles.
 */
export function HomeComponent(props: IHomeProps) {

    const [campus, setCampus] = useState([]);
    const [associates, setAssociates] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        if (props.authUser.role == "Admin") getBuildings();
        if (props.authUser.role == "Trainer") getAssociates();
        if (props.authUser.role == "Building Manager") getRooms();
    }, []);
    
    const getBuildings = async () => {
        // await getCampuses();
        let campuses;
        // mock data
        campuses = (await getAllcampusAPI()).data;

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
                {name: 'a'},
                {name: 'b'},
                {name: 'c'}
            ]
        console.log(associates)
        //@ts-ignore
        setAssociates(associates);
    }

    //Home page rendering for an admin user.
    return (
        <>
            {props.authUser?.role == 'Admin' ? 
            <Wrapper data-test="main-content" title={"Current User"} elements={"Campus abbreviation here."}>
                <div className="full-card">
                    <div className="tblbox">
                        < MaterialTable
                            columns = {[
                                { title: 'Campus Name', field: 'name'},
                                { title: 'Training Manager', field: 'trainingManagerId' },
                                { title: 'Number of Buildings', field: 'buildings.length'}
                            ]}
                            data = {campus}
                            title = "Campus"

                        />
                    </div>
                </div>
            </Wrapper>
            : props.authUser?.role == 'Trainer' ? 
            <Wrapper data-test="main-content" title={"Batch Name"} elements={"Room Number"}>
                <div className="full-card">
                    <div className="tblbox">
                        < MaterialTable
                            columns = {[
                                { title: 'Associate Name', field: 'name'}
                            ]}
                            data = {associates}
                            title = "Associates"

                        />
                    </div>
                </div>
            </Wrapper>
            : props.authUser?.role == 'Building Manager' ? 
            <Wrapper data-test="main-content" title={"Building Name"} elements={"Building ID"}>
                <div className="full-card">
                    <div className="tblbox">
                        < MaterialTable
                            columns = {[
                                { title: 'Room Number', field: 'roomNumber' },
                                { title: 'Room Occupancy', field: 'maxOccupancy' }
                            ]}
                            data = {rooms}
                            title = "Rooms"

                        />
                    </div>
                </div>
            </Wrapper>
            : props.authUser?.role == 'Training Site Manager' ? <></> 
            : <></>
            }
        </>
    )
}
//Trainer --> room, batch
//Site Manager --> Campus, building
//Building Manager --> building, room 