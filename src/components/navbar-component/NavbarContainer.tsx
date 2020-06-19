import {connect} from "react-redux";
import {IState} from "../../reducers";
import NavbarComponent from "./NavbarComponent";
import {getAllCampuses} from "../../action-mappers/campus-action";
import { AppUser } from "../../dtos/appUser";

const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {
}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)
