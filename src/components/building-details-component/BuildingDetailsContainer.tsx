import { IState } from "../../reducers";
import { connect } from "react-redux";
import BuildingDetailsComponent from "./BuildingDetailsComponent";


const mapStateToProps = (state: IState) => {
    return {
        thisBuilding: state.thisBuildingState.thisBuilding
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingDetailsComponent);