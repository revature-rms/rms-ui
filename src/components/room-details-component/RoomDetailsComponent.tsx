import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';

interface IRoomDetailsProps {
    room: any
}

export class RoomDetailsComponent extends React.Component<IRoomDetailsProps, any> {
    constructor(props:any) {
        super(props);
        this.state={}
    }
    render(){
        return(
            <Wrapper title={this.props.room ? `Room ${this.props.room.roomNumber}` : "Room Number Here"} elements="This will be a secondary navbar eventually">
                <div className="full-card">
                    <h4>Room {this.props.room?this.props.room.roomNumber:"Not Found"}</h4>
                    <b>Max Occupancy:</b> {this.props.room?this.props.room.maxOccupancy:"Occupancy Unknown"}<br/><br/>
                    <div className="tblbox">
                        <div className="tblhdr">Current Room Status</div>
                        <table><tr><td><b>Whiteboard:</b></td><td><b>Chairs:</b></td><td><b>Desks:</b></td><td><b>Verified:</b></td></tr>
                        {/**<tr><td>{this.props.room.whitebooardCleaned?"Clean":"Requires Cleaning"}</td><td>{this.props.room.chairsOrdered?"Ordered":"Require Ordering"}</td><td>{this.props.room.desksCleaned?"Clean":"Require Cleaning"}</td><td>{this.props.room.submittedDateTime}</td></tr>**/}</table>
                        <button className="btn right">Update Room Status</button>
                    </div>
                    <br/><br/><br/><br/>
                </div>
                <div className="half-card">
                <b>Resource Created By:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.resourceCreator : ''}<br/>
                    <b>Creation Date:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.resourceCreationDateTime : ''}<br/>
                    <b>Last Modified:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.lastModifiedDate : ''}<br/>
                    <b>Modified By:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.lastModifier : ''}<br/>
                    <b>Resource Owner:</b> {this.props.room.resourceMetadata ? this.props.room.resourceMetadata.resourceOwner : ''}<br/>
                    <button className="btn">
                        Edit
                    </button>
                </div>
            </Wrapper>
        )
    }
}