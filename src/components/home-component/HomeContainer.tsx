import {connect} from "react-redux";
import {IState} from "../../reducers";
import HomeComponent from "./HomeComponent";
import { AppUser } from "../../dtos/appUser";

const mapStateToProps = (state:IState) => {
    return {
        //states needed for the Campus component
        // campuses: state.campusState.campuses,
        // campusMessage: state.campusState.campusMessage,
        // id: state.campusState.id,
        authUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {

}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent)