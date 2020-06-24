import { IState } from "./reducers";
import { login } from "./action-mappers/login-action"
import { connect } from "react-redux";
import App from "./App";



const mapStateToProps =(state: IState) => {
    return {
        currentUser: state.userState.currentUser
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);