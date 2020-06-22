import CampusDetailsComponent from "./CampusDetailsComponent";
import { connect } from "react-redux";
import { IState } from "../../reducers";



const mapStateToProps = (state:IState) => {
    return {
    }
}


const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(CampusDetailsComponent);