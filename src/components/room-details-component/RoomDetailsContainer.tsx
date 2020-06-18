import {connect} from "react-redux";
import {IState} from "../../reducers";
import RoomDetailsComponent from "./RoomDetailsComponent";
import {getTestRoom} from "../../action-mappers/room-details-actions"

const mapStateToProps=(state:IState)=>{
    return {
        room:state.roomState.room
    }
}
const mapDispatchToProps={
    getTestRoom
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomDetailsComponent);