import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import {getCampusByOwnerId } from '../../remote/campus-service'
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Building } from '../../dtos/building';
import { Campus } from '../../dtos/campus';
import { AppUser } from '../../dtos/appUser';
import { getAllBuildingsAPI, getBuildingByOwnerId } from '../../remote/building-service';


export interface IBuildingListProps {
    currentUser: AppUser;
}
/**
 * Will provide all the buildings that are located on a specific campus (depending on what user is signed in)
 * Each building will be rendered with BuildingDetailsComponent when it is clicked
 * Role needed: Admin or Building Manager
 * Endpoint: .../buildings
 */
function BuildingListComponent(props: IBuildingListProps) {

    const [buildings, setBuildings] = useState<Array<Building>>([]);
    const history = useHistory();
    let myBuildings: Array<Building> = []

    const getCampuses = async () => {
        let campusList: Array<Campus> = (await getCampusByOwnerId(props.currentUser?.id)).data;

        campusList.forEach(campus => {
            campus.buildings.forEach(building => {
                myBuildings.push(building);
            });
        });

        setBuildings(myBuildings);
    }

    const getBuildings = async () => {
        let buildingList: Array<Building> = (await getBuildingByOwnerId(props.currentUser?.id)).data;

        buildingList.forEach(building => {
            myBuildings.push(building);
        });

        setBuildings(myBuildings);
    }

    const getAllBuildings = async () => {
        let buildingsList: Array<Building> =(await getAllBuildingsAPI()).data

        buildingsList.forEach(building => {
            myBuildings.push(building);
        });

        setBuildings(myBuildings);
    }

    useEffect(() => {
        if(props.currentUser?.role.includes("Admin")){
            getAllBuildings();
        } else if(props.currentUser?.role.includes("Training Site Manager")) {
            getCampuses();
        }
        else if(props.currentUser?.role.includes("Building Manager")){
            getBuildings();
        }

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
                            { title: 'Street Address', field: 'physicalAddress.unitStreet' },
                            { title: "Building Manager", field: "trainingLead?.firstName" }
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