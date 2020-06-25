import { IState } from "../../reducers";
import { connect } from "react-redux";
import BuildingDetailsComponent from "./BuildingDetailsComponent";


const mapStateToProps = (state: IState) => {
    return {
        
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingDetailsComponent);