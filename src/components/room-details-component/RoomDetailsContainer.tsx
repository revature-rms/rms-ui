import {connect} from "react-redux";
import {IState} from "../../reducers";
import {RoomDetailsComponent} from "./RoomDetailsComponent";

const mapStateToProps=(state:IState)=>{
    return {
        room:state.roomState.room
    }
}
const mapDispatchToProps={
    /** The edit function will go here. */
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomDetailsComponent);