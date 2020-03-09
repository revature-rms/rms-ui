import React from "react";
import Wrapper from "../../utils/div-wrapper/Wrapper";

interface IRoomListProps {
    bldg:any,
    getAllRooms: ()=>void
}

export class RoomListComponent extends React.Component<IRoomListProps,any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllRooms;
    }
    render() {
        return(
            <Wrapper title={this.props.bldg.abbrName?this.props.bldg.abbrName:"Building Abbreviation Here"} elements={this.props.bldg.name?this.props.bldg.name:"Building full name here."}>
                <div className="full-card">
                <div className="tblbox">
                        <div className="tblhdr">Current Room Status</div>
                        <table>
                            <tr><td><b>Room Number:</b></td><td><b>Max Occupancy:</b></td><td><b>Batch:</b></td><td><b>Trainer:</b></td></tr>
                            {this.props.bldg.rooms ? <tr><td>{this.props.bldg.rooms.roomNumber}</td><td>{this.props.bldg.rooms.maxOccupancy}</td><td>{this.props.bldg.rooms.batch.name}</td><td>{this.props.bldg.rooms.batch.trainer.firstName} {this.props.bldg.rooms.batch.trainer.lastName}</td></tr> : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                        </table>
                    </div>
                </div>
            </Wrapper>
        )
    }
}