import { connect } from "react-redux";
import { IState } from "../../reducers";
import {EmployeeDetailsComponent} from "./EmployeeDetailsComponent";

const mapStateToProps = (state:IState) => {
    return {

    }
}

const mapDispatchToProps = {
    
}

// connecting the employees component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetailsComponent)