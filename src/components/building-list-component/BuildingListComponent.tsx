import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { getAllCampus } from '../../remote/campus-service'
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Building } from '../../dtos/building';
import { setThisBuilding } from '../../action-mappers/building-action';


export interface IBuildingListProps {
}

function BuildingListComponent(props: IBuildingListProps) {

    const [buildings, setBuildings] = useState<Array<Building>>([]);
    const history = useHistory();

    const getCampuses = async () => {

    }

    const getBuildings = async () => {

    }

    useEffect(() => {

        getBuildings();

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