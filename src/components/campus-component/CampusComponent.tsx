import React from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';
import  Card  from '@material-ui/core/Card';
import { filterCampusFunction } from '../../utils/helper-functions/filterCampus';
import { Link } from "react-router-dom";
import { sortCampusFunction } from '../../utils/helper-functions/SortCampusesFunction';



interface ICampusProps {
    campuses: any,
    id: number,
    getAllCampuses: () => void
}

export class CampusComponent extends React.Component<ICampusProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            location: 'All locations',
            searchTerm: '',
            sortType: 'ascending'
        }
    }

    //get campuses when the component mount
    componentDidMount = () => {
        if (this.props.campuses === null) {
            this.props.getAllCampuses();
        }
    }

    //changes search term state
    onSearchChange = (e: any) => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    //changes sort type state(sort type will be used in the sort function)
    sortChanger = (e:any) => {
        this.setState({
            ...this.state,
            sortType: e.target.value
        })
    }
       
    //The table's sub-header
    subHeader = () => {
        return (
            <>
                Campus Filter:
                &nbsp;
                <input
                    type="text"
                    placeholder="Type campus name or Training manager's name"
                    onChange={this.onSearchChange}
                />
                &nbsp;
                Sort:
                <select
                onChange={this.sortChanger}
                >
                    <option value="ascending" selected>ascending</option>
                    <option value="descending">descending</option>
                </select>
            </>
        )
    }

    count=0;

    mapCampuses = () => {
        if (this.state.searchTerm.length < 1) {
            let campuses =  this.props.campuses.map((campus: any) => campus)
            //returns sorted table row
            return sortCampusFunction(this.state.sortType, campuses).map((campus:any) => this.makeTable(campus)); 
        }
        if (filterCampusFunction(this.props.campuses, this.state.searchTerm).length === 0) {
            return <h4>No Campus Found!</h4>
        }
        //filters campus
        let campuses =  filterCampusFunction(this.props.campuses, this.state.searchTerm).map((campus: any) => campus);
        //returns sorted table row
        return sortCampusFunction(this.state.sortType, campuses).map((campus:any) => this.makeTable(campus));
    }

    //takes a building and makes a table row
    makeTable = (campus: any) => {
        return (
            <tr key={this.count++}>
                <td><Link to={`/building/${campus["name"]}`}><span id={campus.id} onClick={this.props.campuses?.id}>{campus.name}</span></Link></td>
                <td>{campus.shippingAddress?.unit_street}. {campus.shippingAddress?.city}, {campus.shippingAddress?.state}</td>
                <td>{campus.trainingManager?.firstName} {campus.trainingManager?.lastName}</td>
                <td>{campus.stagingManager?.firstName} {campus.stagingManager?.lastName}</td>
                <td>{campus.hrLead?.firstName} {campus.hrLead?.lastName}</td>
            </tr>
        )
    }

    render() {
        return (
            <Wrapper data-test="main-content" title="Campuses" elements={this.props.campuses ? this.subHeader()
                : "Campus abbreviation here."}>
                <Card className="full-card">

                    <br /> <br />
                    <div className="tblbox">
                        <div className="tblhdr">
                            Campuses
                    </div>
                    <table>
                            <tbody>
                                <tr><td><b>Name:</b></td><td><b>Location :</b></td><td><b>Training Manager:</b></td><td><b>Staging Manager:</b></td><td><b>HR Lead:</b></td></tr>
                                {this.props.campuses ? this.mapCampuses() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                    <br />
                </Card>
            </Wrapper>
        )
    }
}
