import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import { Room } from '../../dtos/room';


export interface IRoomListProps {
}

function RoomListComponent(props: IRoomListProps) {

    const [rooms, setRooms] = useState<Array<Room>>([]);
    const history = useHistory();

    const getRooms = async () => {

    }

    useEffect(() => {

        getRooms();

    }, []);


    return (
        <>
            <div className="display-wrapper">
            <Card>
                <div className="table-wrapper">
                    < MaterialTable
                        columns={[
                            { title: 'Room Number', field: 'roomNumber'},
                            { title: 'Max Occupancy', field: 'maxOccupancy'},
                            { title: 'Active', field: 'isActive'}
                        ]}
                        
                        onRowClick={(event, rowData) => {
                            //@ts-ignore
                            history.push('/rooms/' + rowData.id)
                        }}
                        data={rooms}
                        title="Rooms"
                    />
                </div>
            </Card>
            </div>
        </>
    )

}

export default RoomListComponent;