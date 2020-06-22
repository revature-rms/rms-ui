import {connect} from "react-redux";
import {IState} from "../../reducers";
import NavbarComponent from "./NavbarComponent";
import { AppUser } from "../../dtos/appUser";

const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {
}


export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)
