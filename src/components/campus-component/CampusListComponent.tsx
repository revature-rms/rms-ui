import React, { useEffect, useState } from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import MaterialTable from 'material-table';
import { Link, useHistory } from "react-router-dom";
import { Campus } from "../../dtos/campus"
import { Employee } from "../../dtos/employee"


// for testing, will delete
import { ResourceMetadata } from '../../dtos/resourceMetadata';
import { Address } from '../../dtos/address';
import { getAllCampus } from '../../remote/campus-service';

export interface ICampusProps {

}

function CampusListComponent() {
    //@ts-ignore
    const [campusList, setCampusList] = useState(null as Campus[]);

    const history = useHistory();

    const getCampuses = async () => {
        let campuses = await getAllCampus();
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