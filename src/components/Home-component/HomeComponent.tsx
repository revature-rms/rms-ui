import React, { useState, useEffect } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';
import {getAllcampusAPI} from '../../remote/campus'

export interface IHomeProps {
    //Change any to appUser model later
    currentUser: any;
}

/**
 * This component is the home page for all users. It will provide some default information to the
 * user depending on their role.
 * 
 * TODO: currently, this component only renders for an admin. Conditional rendering will need
 *       to be added as well as the actual rendering for those additional roles.
 */
export function HomeComponent(){

    const [campus, setCampus] = useState ([])

    useEffect(() => {
        getBuildings();
    }, []);
    
    const getBuildings = async () => {
        // await getCampuses();
        let campuses: Array<any> = [];
        campuses = [
            {
                id: 1,
                name: "Campus A",
                abbrName: "CA",
                trainer: "Trainer1",
                buildings: [
                    {
                        id: 1, 
                        name: "Muma College of Business",
                        physicalAddress: "456 N Main st",
                        trainingLead: "Bob"
                    },
                    {
                        id: 2, 
                        name: "Benson Building",
                        physicalAddress: "2626 W State st",
                        trainingLead: "Bill"
                    },
                    {
                        id: 3, 
                        name: "Spaghetti Building",
                        physicalAddress: "2626 W State st",
                        trainingLead: "Bill"
                    }
                ]
            },
            {
                id: 2,
                name: "Campus B",
                abbrName: "CB",
                trainer: "Trainer2",
                buildings: [
                    {
                        id: 3, 
                        name: "Eyering Science Center",
                        physicalAddress: "333 N 750 W",
                        trainingLead: "Suzy"
                    },
                    {
                        id: 4, 
                        name: "Wilkinson Student Center",
                        physicalAddress: "100 W 600 N",
                        trainingLead: "Sean"
                    }]

            }]

        console.log("campuses", campuses)
        //@ts-ignore
        setCampus(campuses)
    }

    //Home page rendering for an admin user.
    return (
        <>
            {}
            <Wrapper data-test="main-content" title={"Current User"} elements={"Campus abbreviation here."}>
                <div className="full-card">
                    <div className="tblbox">
                        < MaterialTable
                            columns = {[
                                { title: 'Campus Name', field: 'name'},
                                { title: 'Training Manager', field: 'trainer' },
                                { title: 'Number of Buildings', field: 'buildings.length'}
                            ]}
                            data = {campus}
                            title = "Campus"

                        />
                    </div>
                </div>
            </Wrapper>
        </>
    )
}