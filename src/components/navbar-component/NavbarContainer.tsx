import {connect} from "react-redux";
import {IState} from "../../reducers";
import { login } from "../../action-mappers/login-action"
import NavbarComponent from "./NavbarComponent";
import { AppUser } from "../../dtos/appUser";

const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {
    login
}


export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)
