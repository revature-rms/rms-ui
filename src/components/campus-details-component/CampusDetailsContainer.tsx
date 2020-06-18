import BuildingListComponent from "./CampusDetailsComponent";
import { connect } from "react-redux";
import { IState } from "../../reducers";
import {getAllCampuses} from "../../action-mappers/campus-action";
import {setThisBuilding} from "../../action-mappers/building-action"

const mapStateToProps = (state:IState) => {
    return {
    }
}


const mapDispatchToProps = {
    setThisBuilding
}

// connecting the Campus component with redux info
export default connect(mapStateToProps,mapDispatchToProps)(BuildingListComponent);