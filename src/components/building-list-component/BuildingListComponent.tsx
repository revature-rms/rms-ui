import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import { filterBuildingsFunction } from '../../utils/helper-functions/filterBuildings';

export class BuildingListComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }

    async componentDidMount() {
        // let campusData: any = await getCampuses();
        if (this.props.campuses === null) {
            await this.props.getAllCampuses();
        }
    }

    componentDidUpdate() {
        // console.log(this.state.campus);
        // console.log(this.state.campus[0]);
    }

    mapBuildings = () => {
        if (this.state.searchTerm.length < 1) {
            return this.props.campuses[0].buildings.map((building: any) => this.makeTable(building))
        }
        if (filterBuildingsFunction(this.props.campuses[0], this.state.searchTerm).length === 0) {
            return <h4>No Building Found!</h4>
        }
        return filterBuildingsFunction(this.props.campuses[0], this.state.searchTerm).map((building: any) => this.makeTable(building));
    }

    onSearchChange = (e: any) => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }
    subHeader = () => {
        return (
            <>
                {this.props.campuses[0].abbrName}
                &nbsp;
                <input
                    data-test="search"
                    type="text"
                    placeholder="Type building name or Lead trainer"
                    onChange={this.onSearchChange}
                />
            </>
        )
    }
    makeTable = (building: any) => {
        return (
            <tr>
                <td><Link to={`/rooms/${building.name}`}><span className="colour-me">{building.name}</span></Link></td>
                <td>{building.physicalAddress.unit_street}. {building.physicalAddress.city}, {building.physicalAddress.state}</td>
                <td>{building.trainingLead.firstName} {building.trainingLead.lastName}</td>
            </tr>
        )
    }

    render() {
        return (
            <>
                <Wrapper data-test="main-content" title={this.props.campuses ? this.props.campuses[0].name : "Campus Name Here"} elements={this.props.campuses ? this.subHeader()
                    : "Campus abbreviation here."}>
                    <div className="full-card">
                        <div className="tblbox">
                            <div className="tblhdr">Buildings in {this.props.campuses ? this.props.campuses[0].abbrName : "Building"}</div>
                            <table>
                                <tbody>
                                    <tr><td><b>Building Name:</b></td><td><b>Address:</b></td><td><b>Training Lead:</b></td></tr>
                                    {this.props.campuses ? this.mapBuildings() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Wrapper>
            </>
        )
    }
}