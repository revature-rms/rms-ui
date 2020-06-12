import {connect} from "react-redux";
import {IState} from "../../reducers";
import {HomeComponent} from "./HomeComponent";
import {getAllCampuses} from "../../action-mappers/campus-action";

const mapStateToProps = (state:IState) => {
    return {
        //states needed for the Campus component
        // campuses: state.campusState.campuses,
        // campusMessage: state.campusState.campusMessage,
        // id: state.campusState.id,
        currentUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {
    //getting all Campuses from Campus action mapper
    getAllCampuses
}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent)