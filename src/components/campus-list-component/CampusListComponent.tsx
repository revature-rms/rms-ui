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
 * Will provide all the campuses that the currentlylogged in user owns
 * Each campus will be rendered with CampusDetailsComponent when it is clicked
 * Role needed: Admin or Training Site Manager
 * Endpoint: .../campuses
 */
function CampusListComponent(props: ICampusProps) {

    const [campusList, setCampusList] = useState<Array<Campus>>([]);
    let myCampuses: Array<Campus> = [];
    const history = useHistory();

    /**
     * Gets the campuses owned by the currently logged in user if they are a training site manager
     */
    const getCampuses = async () => {
        let campusList: Array<Campus> = (await findAllCampusesByOwner(props?.currentUser?.id)).data;
        campusList.forEach(campus => {
            myCampuses.push(campus);
        });
        await setCampusList(myCampuses); 
    }

    /**
     * Gets all campuses if the currently logged in user is an admin
     */
    const getAllCampuses = async () => {
        let campusList: Array<Campus> = (await findAllCampuses()).data;
        campusList.forEach(campus => {
            myCampuses.push(campus);
        });
        await setCampusList(myCampuses);
        
    }

    /**
     * renders the campuses depending on the role of the currently logged in user
     */
    useEffect(() => {  
        if(props.currentUser?.role.includes("Admin")){
            getAllCampuses();
        } else if(props.currentUser?.role.includes("Training Site Manager")) {
            getCampuses();
        }

    }, []);

    return (
        <>
        {/**
         * renders a material table including campus name, training manager first name, staging manager first name, and hr lead first name. (These could be clickable and take to employee details page if desired)
         * each row is clickable and takes you to the endpoint for that campus' detail page
         */}
            <div className="display-wrapper">

                <Card>
                    <div className="table-wrapper">
                        < MaterialTable
                            columns={[
                                { title: 'Name', field: 'name'},
                                { title: 'Training Manager', field: 'trainingManager.firstName' },
                                { title: '', field: 'trainingManager.lastName' },
                                { title: "Staging Manager", field: "stagingManager.firstName" },
                                { title: "", field: "stagingManager.lastName" },
                                { title: "HR Lead", field: "hrLead.firstName" },
                                { title: "", field: "hrLead.lastName" }
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