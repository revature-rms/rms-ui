import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import MaterialTable from 'material-table';
import {useHistory } from "react-router-dom";
import { Campus } from "../../dtos/campus"
import { findAllCampusesByOwner, findAllCampuses} from '../../remote/search-service';
import { AppUser } from '../../dtos/appUser';



export interface ICampusProps {
    currentUser: AppUser;
}
/**
 * Will provide all the campuses that a user is in charge of (depending on what user is signed in)
 * Each campus will be rendered with CampusDetailsComponent when it is clicked
 * Role needed: Training Site Manager
 * Endpoint: .../campuses
 */
function CampusListComponent(props: ICampusProps) {

    const [campusList, setCampusList] = useState<Array<Campus>>([]);
    let myCampuses: Array<Campus> = [];
    const history = useHistory();

    const getCampuses = async () => {
        let campusList: Array<Campus> = (await findAllCampusesByOwner(props?.currentUser?.id)).data;
        campusList.forEach(campus => {
            myCampuses.push(campus);
        });
        await setCampusList(myCampuses); 
    }

    const getAllCampuses = async () => {
        let campusList: Array<Campus> = (await findAllCampuses()).data;
        campusList.forEach(campus => {
            myCampuses.push(campus);
        });
        await setCampusList(myCampuses);
        
    }

    useEffect(() => {  
        if(props.currentUser?.role.includes("Admin")){
            getAllCampuses();
        } else if(props.currentUser?.role.includes("Training Site Manager")) {
            getCampuses();
        }

    }, []);

    return (
        <>
            <div className="display-wrapper">

                <Card>
                    <div className="table-wrapper">
                        < MaterialTable
                            columns={[
                                { title: 'Name', field: 'name'},
                                { title: 'Training Manager', field: 'trainingManager.firstName' },
                                { title: "Staging Manager", field: "stagingManager.firstName" },
                                { title: "HR Lead", field: "hrLead.firstName" }
                            ]}
                            //@ts-ignore
                            onRowClick={(event, rowData) => history.push('/campuses/' + rowData.id)}
                            data={campusList}
                            title="Campuses"
                        />
                    </div>
                </Card>
            </div>
        </>
    )

}

export default CampusListComponent;