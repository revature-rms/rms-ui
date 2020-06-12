import React, { useEffect, useState } from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import MaterialTable from 'material-table';
import { Link } from "react-router-dom";
import { Campus } from "../../dtos/campus"
import { Employee } from "../../dtos/employee"


// for testing, will delete
import { ResourceMetadata } from '../../dtos/resourceMetaData';
import { Address } from '../../dtos/address';

export interface ICampusProps {

}

function CampusListComponent() {

    //campuses array
    //@ts-ignore
    const [campuses, setCampuses] = useState(null as Campus[])

    useEffect(() => {
        let campusesList: Array<Campus> = [];

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
            campusesList = mockCampuses;
            //@ts-ignore
            setCampuses(campusesList)
        }

        getCampuses();

    }, []);

    return (
        <Wrapper data-test="main-content" title="Campuses">
            <Card className="full-card">

                <br /> <br />
                <div className="full-card">
                    <div className="tblbox">
                        < MaterialTable
                            columns={[
                                { title: 'Name', field: 'name', render: rowData => <Link to={'/campus/' + rowData.id}>{rowData.name}</Link> },
                                { title: 'Training Manager', field: 'trainingManager.firstName' },
                                { title: "Staging Manager", field: "stagingManager.firstName" },
                                { title: "HR Lead", field: "hrLead.firstName" }
                            ]}
                            data={campuses}
                            title="Campuses"
                        />
                    </div>
                </div>
                <br />
            </Card>
        </Wrapper>
    )

}

export default CampusListComponent;