import {connect} from "react-redux";
import {IState} from "../../reducers";
import {SearchComponent} from "./SearchComponent";

const mapStateToProps=(state:IState)=>{
    return {

    }
}
const mapDispatchToProps={

}
export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent)