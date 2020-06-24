import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Building } from '../../dtos/building';
import { Campus } from '../../dtos/campus';
import { AppUser } from '../../dtos/appUser';
import { findAllBuilding, findBuildingByOwner, findAllCampusesByOwner } from '../../remote/search-service';


export interface IBuildingListProps {
    currentUser: AppUser;
}

/**
 * Will provide all the buildings that are owned by the current logged in user or on their currently owned campus
 * Each building will be rendered with BuildingDetailsComponent when it is clicked
 * Role needed: Admin or Training Site Manager or Building Manager
 * Endpoint: .../buildings
 */

function BuildingListComponent(props: IBuildingListProps) {

    const [buildings, setBuildings] = useState<Array<Building>>([]);
    const history = useHistory();
    let myBuildings: Array<Building> = []

    /**
     * Gets campuses that are owned by current user if they are a training site manager and extracts buildings from the campus
     */
    const getCampuses = async () => {
        let campusList: Array<Campus> = (await findAllCampusesByOwner(props.currentUser?.id)).data;

        campusList.forEach(campus => {
            campus.buildings.forEach(building => {
                myBuildings.push(building);
            });
        });

        setBuildings(myBuildings);
    }

    /**
     * Gets buildings that are directly owned by the signed in user if they are a building manager
     */
    const getBuildings = async () => {
        let buildingList: Array<Building> = (await findBuildingByOwner(props.currentUser?.id)).data;

        buildingList.forEach(building => {
            myBuildings.push(building);
        });

        setBuildings(myBuildings);
    }

    /**
     * Gets all buildings if the user currently signed in is an admin
     */
    const getAllBuildings = async () => {
        let buildingsList: Array<Building> =(await findAllBuilding()).data

        buildingsList.forEach(building => {
            myBuildings.push(building);
        });

        setBuildings(myBuildings);
    }

    /**
     * Renders buildings based on the currently logged in user role
     */
    useEffect(() => {
        if (props.currentUser?.role.includes("Admin")){
            getAllBuildings();
        } else if (props.currentUser?.role.includes("Training Site Manager")) {
            getCampuses();
        } else if (props.currentUser?.role.includes("Building Manager")) {
            getBuildings();
        }

    }, []);


    return (
        <>
            {/**
             * renders a material table including building id, name, street address, and building manager first name
             * each row is clickable and takes you to the endpoint for that buildings detail page
             */}
            <div className="display-wrapper">
            <Card>
                <div className="table-wrapper">
                    < MaterialTable
                        columns={[
                            { title: 'Id', field: 'id' },
                            { title: 'Name', field: 'name' },
                            { title: 'Street Address', field: 'address.unitStreet' },
                            { title: "Building Manager", field: "trainingLead.firstName" },
                            { title: "", field: "trainingLead.lastName" }
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