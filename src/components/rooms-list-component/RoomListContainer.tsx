import {connect} from "react-redux";
import {IState} from "../../reducers";
import {RoomListComponent} from "./RoomListComponent";
import {getAllRooms} from "../../action-mappers/room-list-actions"

const mapStateToProps=(state:IState)=>{
    return {
        rooms:state.roomsState.rooms
    }
}
const mapDispatchToProps={
    getAllRooms
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomListComponent)