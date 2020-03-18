import React from "react";
import Wrapper from "../../utils/div-wrapper/Wrapper";
import { Link } from "react-router-dom";
import { filterRoomsFunction } from "../../utils/helper-functions/filterRooms";
import { sortRoomFunction } from "../../utils/helper-functions/sortRoomFunction";

interface IRoomListProps {
    building: any,
    getAllRooms: () => void
}
interface IRoomListState {
    visible: boolean,
    searchTerm: string,
    sortType: string
}

export class RoomListComponent extends React.Component<IRoomListProps, IRoomListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false,
            searchTerm: "",
            sortType: "ascending"
        }
    }

    count = 0;

    componentDidMount() {
        this.props.getAllRooms();
        console.log(this.props.building);
    }
    mapRooms = () => {
        if (this.state.searchTerm.length < 1) {
                            //returns sorted table row
            let rooms = (this.props.building.rooms ? this.props.building.rooms : [{}])
            return sortRoomFunction(this.state.sortType, rooms).map((room: any) => this.makeTable(room));
        }
        if (filterRoomsFunction(this.props.building, this.state.searchTerm).length === 0) {
            return <h4>No Rooms Found!</h4>
        }
                //filters rooms
        let rooms = filterRoomsFunction(this.props.building, this.state.searchTerm).map((room: any) => room);
                //returns sorted table row
        return sortRoomFunction(this.state.sortType, rooms).map((room: any) => this.makeTable(room));
    }

    onSearchChange = (e: any) => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }
    sortChanger = (e: any) => {
        this.setState({
            ...this.state,
            sortType: e.target.value
        })
    }

    subHeader = () => {
        return (
            <>
                {this.props.building.abbrName}
                &nbsp;
                <input
                    type="text"
                    placeholder="Type room number, trainer or batch number"
                    onChange={this.onSearchChange}
                />
                &nbsp;
                Sort:
                <select
                    onChange={this.sortChanger}
                >
                    <option value="ascending" selected>ascending</option>
                    <option value="descending">descending</option>
                </select>
            </>
        )
    }

    makeTable = (room: any) => {
        return (
            <tr key={`${++this.count}`}>
                <td><Link to={`/room-details/${room.roomNumber}`}><span className="colour-me">{room.roomNumber}</span></Link></td>
                <td>{room.maxOccupancy}</td>
                <td>{room.batch ? room.batch.name : ""}</td>
                <td>{room.batch ? room.batch.trainer.firstName : ""} {room.batch ? room.batch.trainer.lastName : ""}</td>
            </tr>
        )
    }
    mapAmenities = () => {
        let amenities = (this.props.building.amenities ? this.props.building.amenities : [{}])
        return amenities.map((amenity: any) => this.makeList(amenity))
    }
    makeList = (amenity: any) => {
        return (
            <div key={`${++this.count}`}><b>{amenity.type}:</b> <span className="caps">{amenity.status}</span></div>
        )
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
            <Wrapper data-test="main-content" title={this.props.building ? this.props.building.name : "Building Name Here"} elements={this.props.building ? this.subHeader() : "Building abbreviation here."}>
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
                    <br />
                    <span className="unimplemented" id="edit">I'm not implemented yet!  Sorry!</span>
                </div>
                <div className="half-card">
                    <h4>Building Amenities</h4>
                    {this.props.building ? this.mapAmenities() : <><b>Amenities Found:</b> None</>}
                    <br />
                    <button className="btn" onClick={this.notYet}>
                        Edit
                    </button>
                </div>
                <div className="half-card">
                    <b>Resource Created By:</b> {this.props.building.resourceMetadata ? this.props.building.resourceMetadata.resourceCreator.username : ''}<br />
                    <b>Creation Date:</b> {this.props.building.resourceMetadata ? this.props.building.resourceMetadata.resourceCreationDateTime.substring(0,10) : ''}<br />
                    <b>Last Modified:</b> {this.props.building.resourceMetadata ? this.props.building.resourceMetadata.lastModifiedDateTime.substring(0,10) : ''}<br />
                    <b>Modified By:</b> {this.props.building.resourceMetadata ? this.props.building.resourceMetadata.lastModifier.username : ''}<br />
                    <b>Resource Owner:</b> {this.props.building.resourceMetadata ? this.props.building.resourceMetadata.resourceOwner.username : ''}<br />
                </div>
            </Wrapper>
        )
    }
}