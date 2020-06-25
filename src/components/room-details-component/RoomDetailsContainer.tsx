import {connect} from "react-redux";
import {IState} from "../../reducers";
import RoomDetailsComponent from "./RoomDetailsComponent";

const mapStateToProps=(state:IState)=>{
    return {

    }
}
const mapDispatchToProps={

}
export default connect(mapStateToProps,mapDispatchToProps)(RoomDetailsComponent);