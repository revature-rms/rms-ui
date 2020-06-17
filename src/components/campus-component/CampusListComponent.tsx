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

export interface ICampusProps {

}

function CampusListComponent() {

    //campuses array
    //@ts-ignore
    const [campusList, setCampusList] = useState(null as Campus[])

    const history = useHistory();

    useEffect(() => {
        let campuses: Array<Campus> = [];

        const getCampuses = async () => {
            //campusesList = await getAllCampusAPI();
            let mockEmployee = new Employee(
                1,
                "testFN",
                "test LN",
                "test@test.com",
                "test title",
                "test dept",
                //@ts-ignore
                null as ResourceMetadata
            )
            let mockCampuses = [
                new Campus(
                    1,
                    "Campus A",
                    "CA",
                    //@ts-ignore
                    null as Address,
                    mockEmployee,
                    mockEmployee,
                    mockEmployee,
                    [],
                    [],
                    //@ts-ignore
                    null as ResourceMetadata
                ),
                new Campus(
                    2,
                    "Campus B",
                    "CA",
                    //@ts-ignore
                    null as Address,
                    mockEmployee,
                    mockEmployee,
                    mockEmployee,
                    [],
                    [],
                    //@ts-ignore
                    null as ResourceMetadata
                )

            ]
            campuses = mockCampuses;
            //@ts-ignore
            setCampusList(campuses)
        }

        getCampuses();

    }, []);

    return (
            <Card>
                <div className="table-wrapper">
                    < MaterialTable
                        columns={[
                            // link to buildings page of each campus
                            { title: 'Name', field: 'name', render: rowData => <Link to={'/campus/' + rowData.id}>{rowData.name}</Link> },
                            { title: 'Training Manager', field: 'trainingManager.firstName' },
                            { title: "Staging Manager", field: "stagingManager.firstName" },
                            { title: "HR Lead", field: "hrLead.firstName" }
                        ]}
                        //@ts-ignore
                        onRowClick={(event, rowData) => history.push('/campus/' + rowData.id)}
                        data={campusList}
                        title="Campuses"
                    />
                </div>
                <br />
            </Card>
    )

}

export default CampusListComponent;