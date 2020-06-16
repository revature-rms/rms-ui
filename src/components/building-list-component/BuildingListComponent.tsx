import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAllCampusAPI } from '../../remote/campus-service'
import MaterialTable from 'material-table';
import "../../styles/building.scss"
import Card from '@material-ui/core/Card';

export interface IBuildingListProps {
    authUser: any
}

function BuildingListComponent() {

    //building array
    const [buildings, setBuildings] = useState([])

    //makes a request to the api and gets all campus data. Extracts building data to insert into local buildings state
    useEffect(() => {
        let campuses: Array<any> = [];
        let tempBuildings: Array<any> = [];

        const getCampuses = async () => {
            campuses = (await getAllCampusAPI()).data;
        }

        const getBuildings = async () => {
            // await getCampuses();

            campuses = [{
                id: 1,
                name: "Campus A",
                abbrName: "CA",
                buildings: [{
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
                }]
            },
            {
                id: 2,
                name: "Campus B",
                abbrName: "CB",
                buildings: [{
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
            campuses.forEach(campus => {
                //@ts-ignore
                campus.buildings.forEach(building => {
                    tempBuildings.push(building)
                })
            })
            //@ts-ignore
            setBuildings(tempBuildings)
        }

        getBuildings();



    }, []);


    return (
        <>
            <Card>
                <div className="table-wrapper">
                    < MaterialTable
                        columns={[
                            { title: 'Id', field: 'id' },
                            { title: 'Name', field: 'name' },
                            { title: 'Address', field: 'physicalAddress' },
                            { title: "Building Manager", field: "trainingLead" }
                        ]}
                        data={buildings}
                        title="Buildings"
                    />
                </div>
            </Card>
        </>
    )

}

export default BuildingListComponent