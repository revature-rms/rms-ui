import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import TableData from "../../utils/tableData-display/tableData";
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";
import { filterBuildingsFunction } from '../../utils/helper-functions/filterBuildings';

import { getCampuses } from '../../remote/getCampus';
import { type } from 'os';

export class BuildingListComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            campus: "",
            activeCampus: "",
            searchTerm: ""
        }
    }

    async componentDidMount() {
        let campusData: any = await getCampuses();
        let campus = campusData["campus"];
        this.setState({
            ...this.state,
            campus: campus,
            activeCampus: campus[0]
        })
    }

    componentDidUpdate() {
        // console.log(this.state.campus);
        // console.log(this.state.campus[0]);
        console.log(this.state.searchTerm);
    }

    mapBuildings = () => {
        if (this.state.searchTerm.length < 1) {
            return this.state.activeCampus.buildings.map((building: any) => this.makeTable(building))
        }
        if (filterBuildingsFunction(this.state.activeCampus, this.state.searchTerm).length === 0) {
            return <h4>No Building Found!</h4>
        }
        return filterBuildingsFunction(this.state.activeCampus, this.state.searchTerm).map((building: any) => this.makeTable(building));
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
                {this.state.activeCampus.abbrName}
                <input
                    type="text"
                    onChange={this.onSearchChange}
                />
            </>
        )
    }
    makeTable = (building: any) => {
        console.log(building.rooms);
        return (
            <tr>
                <td><Link to={`/room-details/${building.name}`}><span className="colour-me">{building.name}</span></Link></td>
                <td>{building.physicalAddress.unit_street}. {building.physicalAddress.city}, {building.physicalAddress.state}</td>
                <td>{building.trainingLead.firstName} {building.trainingLead.lastName}</td>
            </tr>
        )
    }

    render() {
        return (
            <>
                <Wrapper title={this.state.activeCampus ? this.state.activeCampus.name : "Campus Name Here"} elements={this.state.activeCampus ? this.subHeader()
                    : "Campus abbreviation here."}>
                    <div className="full-card">
                        <div className="tblbox">
                            <div className="tblhdr">Buildings in {this.state.activeCampus ? this.state.activeCampus.abbrName : "Building"}</div>
                            <table>
                                <tbody>
                                    <tr><td><b>Building Name:</b></td><td><b>Address:</b></td><td><b>Training Lead:</b></td></tr>
                                    {this.state.activeCampus ? this.mapBuildings() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Wrapper>
            </>
        )
    }
}