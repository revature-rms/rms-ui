import React from 'react';
import { allData } from '../../remote/allData';
import { filterBuildingsFunction } from '../../utils/helper-functions/filterBuildings';
import { sortBuildingFunction } from '../../utils/helper-functions/sortBuilidingFunction';
import { Link } from "react-router-dom";
import Wrapper from '../../utils/div-wrapper/Wrapper';

export class BuildingDetailsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            campus: "",
            searchTerm: "",
            sortType: "ascending"
        }
    }

    resources:any = "";
    id: any
    campus: any;
    count = 0;

    async componentDidMount() {
        this.resources = await this.gatherData();
        this.id = this.props.match.params.id;
       this.setCampus();
    }

    setCampus = () => {
        if (this.resources.campus) {
            this.resources.campus.map((campus: any) => {
                console.log(this.id);
                if (campus["name"] === this.id) {
                    if(this.state.campus.length === 0 || this.state.campus.name !== this.id)
                    this.setState({
                        campus: campus
                    })
                }
            })
        }
    }
    componentDidUpdate() {
        this.id = this.props.match.params.id;
        this.setCampus()
        console.log(this.campus);
    }

    gatherData = async () => {
        let apiData = await allData();
        return apiData;
    }

    mapBuildings = () => {
        if (this.state.searchTerm.length < 1) {
            let buildings = this.state.campus.buildings.map((building: any) => building)
            return sortBuildingFunction(this.state.sortType, buildings).map((building: any) =>  this.makeTable(building))
        }
        if (filterBuildingsFunction(this.state.campus, this.state.searchTerm).length === 0) {
            return <h4>No Building Found!</h4>
        }
        let filteredBuildings = filterBuildingsFunction(this.state.campus, this.state.searchTerm).map((building: any) =>  building);
        return sortBuildingFunction(this.state.sortType, filteredBuildings).map((building: any) =>  this.makeTable(building));
    }

    onSearchChange = (e: any) => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    sortChanger = (e:any) => {
        this.setState({
            ...this.state,
            sortType: e.target.value
        })
    }
    subHeader = () => {
        return (
            <>
                {this.state.campus.abbrName}
                &nbsp;
                <input
                    data-test="search"
                    type="text"
                    placeholder="Type building name or Lead trainer"
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
    makeTable = (building: any) => {
        return (
            <tr key={`${building.trainingLead.firstName}${this.count++}`}>
                <td><Link to={`/rooms/${building.name}`}><span className="colour-me">{building.name}</span></Link></td>
                <td>{building.physicalAddress.unit_street}. {building.physicalAddress.city}, {building.physicalAddress.state}</td>
                <td>{building.trainingLead.firstName} {building.trainingLead.lastName}</td>
            </tr>
        )
    }

    render() {
        return (
            <>
            <Wrapper data-test="main-content" title={this.state.campus ? this.state.campus.name : "Campus Name Here"} elements={this.state.campus ? this.subHeader()
                : "Campus abbreviation here."}>
                <div className="full-card">
                    <div className="tblbox">
                        <div className="tblhdr">Buildings in {this.state.campus ? this.state.campus.abbrName : "Building"}</div>
                        <table>
                            <tbody>
                                <tr><td><b>Building Name:</b></td><td><b>Address:</b></td><td><b>Training Lead:</b></td></tr>
                                {this.state.campus ? this.mapBuildings() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Wrapper>
        </>
        )
    }
}