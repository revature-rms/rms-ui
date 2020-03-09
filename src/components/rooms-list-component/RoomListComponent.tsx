import React from "react";
import Wrapper from "../../utils/div-wrapper/Wrapper";

interface IRoomListProps {
    building: any,
    getAllRooms: () => void
}

export class RoomListComponent extends React.Component<IRoomListProps, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllRooms();
    }
    mapRooms = () => {
        let rooms = (this.props.building.rooms?this.props.building.rooms:[{}])
        rooms.map((room: any) => this.makeTable(room))
    }
    makeTable = (room: any) => {
        return (
            <tr>
                <td>{room.roomNumber}</td>
                <td>{room.maxOccupancy}</td>
                <td>{room.batch?room.batch.name:""}</td>
                <td>{room.batch?room.batch.trainer.firstName:""} {room.batch?room.batch.trainer.lastName:""}</td>
            </tr>
        )
    }
    componentDidUpdate() {
        console.log(this.props.building)
    }
    render() {
        return (
            <Wrapper title={this.props.building ? this.props.building.abbrName : "Building Abbreviation Here"} elements={this.props.building ? this.props.building.name : "Building full name here."}>
                <div className="full-card">
                    <div className="tblbox">
                        <div className="tblhdr">Rooms in {this.props.building ? this.props.building.abbrName : "Building"}</div>
                        <table>
                            <tbody>
                                <tr><td><b>Room Number:</b></td><td><b>Max Occupancy:</b></td><td><b>Batch:</b></td><td><b>Trainer:</b></td></tr>
                                {this.props.building ? this.mapRooms() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Wrapper>
        )
    }
}