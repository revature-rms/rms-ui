import { IState } from "../../reducers";
import { login } from "../../action-mappers/login-action"
import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";



const mapStateToProps =(state: IState) => {
    return {
        currentUser: state.userState.currentUser,
        loggedIn: state.userState.loggedIn,
        loginMessage: state.userState.loginMessage

    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);