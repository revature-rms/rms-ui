import { connect } from "react-redux";
import { IState } from "../../reducers";
import CampusComponent from "./CampusComponent";
import {getAllCampuses} from "../../action-mappers/campus-action";
import {updateId} from "../../action-mappers/campus-action"

const mapStateToProps = (state:IState) => {
    return {
        //states needed for the Campus component
        campuses: state.campusState.campuses,
        campusMessage: state.campusState.campusMessage,
        id: state.campusState.id
    }
}


const mapDispatchToProps = {
    //getting all Campuses from Campus action mapper
    getAllCampuses,
    updateId
}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(CampusComponent)