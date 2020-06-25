import {connect} from "react-redux";
import {IState} from "../../reducers";
import RoomListComponent from "./RoomListComponent";

const mapStateToProps=(state:IState)=>{
    return {
        currentUser: state.userState.currentUser
    }
}
const mapDispatchToProps={
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomListComponent)