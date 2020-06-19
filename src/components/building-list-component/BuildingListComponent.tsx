import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { getAllCampus } from '../../remote/campus-service'
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Building } from '../../dtos/building';
import { setThisBuilding } from '../../action-mappers/building-action';


export interface IBuildingListProps {
}
/**
 * Will provide all the buildings that are located on a specific campus (depending on what user is signed in)
 * Each building will be rendered with BuildingDetailsComponent when it is clicked
 * Role needed: Admin or Building Manager
 * Endpoint: .../buildings
 */
function BuildingListComponent(props: IBuildingListProps) {

    //building array
    const [buildings, setBuildings] = useState([])
    const history = useHistory();

    //makes a request to the api and gets all campus data. Extracts building data to insert into local buildings state
    useEffect(() => {
        let campuses: Array<any> = [];
        let tempBuildings: Array<any> = [];

        const getCampuses = async () => {
            campuses = (await getAllCampus()).data;
        }

        const getBuildings = async () => {
            // await getCampuses();

            campuses = [{
                id: 1,
                name: "Campus A",
                abbrName: "CA",
                buildings: [{
                    id: 12,
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
            <div className="display-wrapper">
            <Card>
                <div className="table-wrapper">
                    < MaterialTable
                        columns={[
                            { title: 'Id', field: 'id' },
                            { title: 'Name', field: 'name' },
                            { title: 'Address', field: 'physicalAddress' },
                            { title: "Building Manager", field: "trainingLead" }
                        ]}
                        
                        onRowClick={(event, rowData) => {
                            //@ts-ignore
                            history.push('/buildings/' + rowData.id)
                        }}
                        data={buildings}
                        title="Buildings"
                    />
                </div>
            </Card>
            </div>
        </>
    )

}

export default BuildingListComponent;