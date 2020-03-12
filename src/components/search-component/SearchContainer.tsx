import {connect} from "react-redux";
import {IState} from "../../reducers";
import {SearchComponent} from "./SearchComponent";
import {getAllRooms} from "../../action-mappers/room-list-actions"

//fix letter, all data should be fetched here
const mapStateToProps=(state:IState)=>{
    return {
        building:state.roomsState.building
    }
}
const mapDispatchToProps={
    getAllRooms
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent)