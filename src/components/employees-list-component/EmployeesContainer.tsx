import { connect } from "react-redux";
import { IState } from "../../reducers";
import EmployeesComponent from "./EmployeesComponent";

const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.userState.currentUser
    }
}


const mapDispatchToProps = {
}

// connecting the employees component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(EmployeesComponent)