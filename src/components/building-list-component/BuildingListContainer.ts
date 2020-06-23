import BuildingListComponent from "./BuildingListComponent";
import { connect } from "react-redux";
import { IState } from "../../reducers";


const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {
}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(BuildingListComponent);