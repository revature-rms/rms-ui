import React, { useEffect, useState } from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import MaterialTable from 'material-table';
import { Link } from "react-router-dom";

export interface ICampusProps {

}

function CampusComponent() {

    //campuses array
    const [campuses, setCampuses] = useState([])

    useEffect(() => {
        let campusesList: Array<any> = [];

        const getCampuses = async () => {
            //campusesList = await getAllCampusAPI();
            let mockCampuses = [{
                id: 1,
                name: "Campus A",
                abbrName: "CA",
                location: "test",
                trainingLead: "test trainging lead",
                stagingLead: "test staginf lead",
                HRLead: "test HR lead"
            },
            {
                id: 2,
                name: "Campus B",
                abbrName: "CB",
                location: "test",
                trainingLead: "test trainging lead",
                stagingLead: "test staginf lead",
                HRLead: "test HR lead"
            }]
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
                                { title: 'Name', field: 'name', render:  rowData => <a href={'/path/view_note/' + rowData.name}>{rowData.name}</a> },
                                { title: 'Location', field: 'location' },
                                { title: 'Training Manager', field: 'trainingLead' },
                                { title: "Staging Manager", field: "stagingLead" },
                                { title: "HR Lead", field: "HRLead" }
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

export default CampusComponent;