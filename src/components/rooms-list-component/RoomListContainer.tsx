import {connect} from "react-redux";
import {IState} from "../../reducers";
import RoomListComponent from "./RoomListComponent";
import {getAllRooms} from "../../action-mappers/room-list-actions"

const mapStateToProps=(state:IState)=>{
    return {
        currentUser: state.userState.currentUser
    }
}
const mapDispatchToProps={
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomListComponent)