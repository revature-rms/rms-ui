import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from 'react-router-dom';

interface IRoomDetailsProps {
    room: any,
    getTestRoom: () => void
}
interface IRoomDetailsState {
    visible: boolean
}

export class RoomDetailsComponent extends React.Component<IRoomDetailsProps, IRoomDetailsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        this.props.getTestRoom()
    }
    notYet = () => {
        let tarItem = document.getElementById("edit");
        console.log(tarItem);
        if (tarItem) {
            if (this.state.visible === false) {
                tarItem.style.visibility = "visible"
                this.setState({
                    ...this.state,
                    visible: true
                });
            }
            else if (this.state.visible === true) {
                tarItem.style.visibility = "hidden"
                this.setState({
                    ...this.state,
                    visible: false
                });
            }
        }
    }
    render() {
        return (
        <Wrapper data-test="main-content" title={this.props.room ? `Room ${this.props.room.roomNumber}` : "Room Number Here"} elements={<><Link to="/rooms"> Back </Link> {this.props.room?<a href={`/room-details/${this.props.room.id}`}>Room Overview</a>:""} {this.props.room?<span onClick={this.notYet}>Work Orders</span>:""}</>}>
                <div className="full-card">
                    <h4>Room {this.props.room ? this.props.room.roomNumber : "Not Found"}</h4>
                    <b>Max Occupancy:</b> {this.props.room ? this.props.room.maxOccupancy : "Occupancy Unknown"}<br />
                    <b>Batch:</b> {this.props.room.batch?this.props.room.batch.name:"Unoccupied"}<br />
                    <b>Trainer:</b> {this.props.room.batch?`${this.props.room.batch.trainer.firstName} ${this.props.room.batch.trainer.lastName}`:"N/A"}<br />
                    <b>Co-Trainer:</b> {this.props.room.batch?`${this.props.room.batch.coTrainer.firstName} ${this.props.room.batch.coTrainer.lastName}`:"N/A"}<br />
                    <br />
                    <div className="tblbox">
                        <div className="tblhdr">Current Room Status</div>
                        <table><tr><td><b>Whiteboard:</b></td><td><b>Chairs:</b></td><td><b>Desks:</b></td><td><b>Verified:</b></td></tr>
                            {this.props.room.currentStatus ? <tr><td>{this.props.room.currentStatus.whitebooardCleaned ? "Clean" : "Requires Cleaning"}</td><td>{this.props.room.currentStatus.chairsOrdered ? "Ordered" : "Require Ordering"}</td><td>{this.props.room.currentStatus.desksCleaned ? "Clean" : "Require Cleaning"}</td><td>{this.props.room.currentStatus.submittedDateTime}</td></tr> : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}</table>
                        <button data-test="button"className="btn right" onClick={this.notYet}>Update Room Status</button>
                    </div>
                    <br /><br />
                    <span className="unimplemented" id="edit">I'm not implemented yet!  Sorry!</span>
                    <br /><br />
                </div>
                <div className="half-card">
                    <b>Resource Created By:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.resourceCreator.username : ''}<br />
                    <b>Creation Date:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.resourceCreationDateTime : ''}<br />
                    <b>Last Modified:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.lastModifiedDateTime : ''}<br />
                    <b>Modified By:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.lastModifier.username : ''}<br />
                    <b>Resource Owner:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.resourceOwner.username : ''}<br />
                    <button className="btn" onClick={this.notYet}>
                        Edit
                    </button>
                </div>
            </Wrapper>
        )
    }
}