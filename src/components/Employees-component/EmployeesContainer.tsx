import { connect } from "react-redux";
import { IState } from "../../reducers";
import {EmployeesComponent} from "./EmployeesComponent";
import {getAllEmployees} from "../../action-mappers/employees-action"

const mapStateToProps = (state:IState) => {
    return {
        //states needed for the employees component
        employees: state.employeesState.employees,
        employeesMessage: state.employeesState.employeesMessage
    }
}


const mapDispatchToProps = {
    //getting all employees from employees action mapper
    getAllEmployees
}

// connecting the employees component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(EmployeesComponent)