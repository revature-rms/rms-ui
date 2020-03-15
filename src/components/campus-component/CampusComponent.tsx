import React from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';
import  Card  from '@material-ui/core/Card';
import CampusTable from '../../utils/campus-table/campusDisplay';
import { filterCampusFunction } from '../../utils/helper-functions/filterCampus';


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
            searchTerm: ''
        }
    }

    //get campuses when the component mount
    componentDidMount = () => {
        if (this.props.campuses === null) {
            this.props.getAllCampuses();
        }
    }

    onSearchChange = (e: any) => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }
    componentDidUpdate(){
        console.log(this.props.campuses);
    }
       

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
            </>
        )
    }

    mapCampuses = () => {
        if (this.state.searchTerm.length < 1) {
            return this.props.campuses.map((campus: any) => this.makeTable(campus))
        }
        if (filterCampusFunction(this.props.campuses, this.state.searchTerm).length === 0) {
            return <h4>No Campus Found!</h4>
        }
        return filterCampusFunction(this.props.campuses, this.state.searchTerm).map((campus: any) => this.makeTable(campus));
    }
    makeTable = (campus: any) => {
        return (
            <tr>
                <td>{campus.id}</td>
                <td>{campus.name}</td>
                <td>{campus.shippingAddress.unit_street}. {campus.shippingAddress.city}, {campus.shippingAddress.state}</td>
                <td>{campus.trainingManager.firstName} {campus.trainingManager.lastName}</td>
                <td>{campus.stagingManager.firstName} {campus.stagingManager.lastName}</td>
                <td>{campus.hrLead.firstName} {campus.hrLead.lastName}</td>
            </tr>
        )
    }

    render() {
        return (
            <Wrapper title="Campuses" elements={this.props.campuses ? this.subHeader()
                : "Campus abbreviation here."}>
                <Card className="full-card">

                    <br /> <br />
                    <div className="tblbox">
                        <div className="tblhdr">
                            Campuses
                    </div>
                    <table>
                            <tbody>
                                <tr><td><b>Campus Id:</b></td><td><b>Name:</b></td><td><b>Location :</b></td><td><b>Training Manager:</b></td><td><b>Staging Manager:</b></td><td><b>HR Lead:</b></td></tr>
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

//ID	NAME	LOCATION	TRAINING MANAGER	STAGING MANAGER	HR LEAD

//1	Revature at University of South Florida	3220 Banyan Circle, Tampa, Florida	Willow Jackson	Willow Jackson	Willow Jackson	3	1