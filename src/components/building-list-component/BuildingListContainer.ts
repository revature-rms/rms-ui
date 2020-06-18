import BuildingListComponent from "./BuildingListComponent";
import { connect } from "react-redux";
import { IState } from "../../reducers";
import {getAllCampuses} from "../../action-mappers/campus-action";


const mapStateToProps = (state:IState) => {
    return {
    }
}


const mapDispatchToProps = {
}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(BuildingListComponent);