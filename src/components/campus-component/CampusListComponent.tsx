import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import MaterialTable from 'material-table';
import {useHistory } from "react-router-dom";
import { Campus } from "../../dtos/campus"
import { getCampusByOwnerId} from '../../remote/campus-service';
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

    //@ts-ignore
    const [campusList, setCampusList] = useState<Array<Campus>>([]);
    const [table, setTable] = useState<any>(null);
    const history = useHistory();

    const getCampuses = async () => {
        let campuses = (await getCampusByOwnerId(props?.currentUser?.id)).data;
        //@ts-ignore
        setCampusList(campuses);
    }

    useEffect(() => {  
        getCampuses();
    }, []);

    return (
        <>
            <div className="display-wrapper">

                <Card>
                    <div className="table-wrapper">
                        < MaterialTable
                            columns={[
                                { title: 'Name', field: 'name'},
                                { title: 'Training Manager', field: 'trainingManagerId' },
                                { title: "Staging Manager", field: "stagingManagerId" },
                                { title: "HR Lead", field: "hrLead" }
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