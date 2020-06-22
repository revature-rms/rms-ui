import { connect } from "react-redux";
import { IState } from "../../reducers";
import CampusListComponent from "./CampusListComponent";

const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {

}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(CampusListComponent)