import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { getAllCampus, getCampusByOwnerId } from '../../remote/campus-service'
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Building } from '../../dtos/building';
import { setThisBuilding } from '../../action-mappers/building-action';
import { Campus } from '../../dtos/campus';
import { AppUser } from '../../dtos/appUser';
import { getBuildingByOwnerId } from '../../remote/building-service';


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
        if(campusList.length > 0){
            campusList.forEach(campus => {
                campus.buildings.forEach(building => {
                    myBuildings.push(building);
                });
            });
        }
    }

    const getBuildings = async () => {
        let buildingList: Array<Building> = (await getBuildingByOwnerId(props.currentUser?.id)).data;
        if(buildingList.length > 0){
            buildingList.forEach(building => {
                myBuildings.push(building);
            })
        }
    }

    useEffect(() => {

        getBuildings();
        getCampuses();
        setBuildings(myBuildings);

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