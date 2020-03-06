import { connect } from "react-redux";
import { IState } from "../../reducers";
import {EmployeesComponent} from "./EmployeesComponent";
import {getAllEmployees} from "../../action-mappers/employees-action"

const mapStateToProps = (state:IState) => {
    return {
        //all of the state that goes to login component goes inside here
        employees: state.employeesState.employees,
        employeesMessage: state.employeesState.employeesMessage
    }
}


const mapDispatchToProps = {
    //getting all employees from employees action mapper
    getAllEmployees
}

// this connect statemengt is building a new component that passes the redux info into the login component
export default connect(mapStateToProps,mapDispatchToProps)(EmployeesComponent)