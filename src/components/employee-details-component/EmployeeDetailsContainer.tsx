import { connect } from "react-redux";
import { IState } from "../../reducers";
import {EmployeeDetailsComponent} from "./EmployeeDetailsComponent";

const mapStateToProps = (state:IState) => {
    return {
        //states needed for the employeeDetails component
        employees: state.employeesState.employees,
        id: state.employeesState.id

    }
}

const mapDispatchToProps = {
    
}

// connecting the employees component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetailsComponent)