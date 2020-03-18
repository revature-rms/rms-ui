import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import { filterBuildingsFunction } from '../../utils/helper-functions/filterBuildings';
import { sortBuildingFunction } from '../../utils/helper-functions/sortBuilidingFunction';
export class BuildingListComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchTerm: "",
            sortType: "ascending"
        }
    }

    count = 0;

    async componentDidMount() {
       await this.gatherData();
    }

     //makes a request to the api and gets all the data back
     gatherData = async () => {
        if (this.props.campuses === null) {
            await this.props.getAllCampuses();
        }
    }

    mapBuildings = () => {
        if (this.state.searchTerm.length < 1) {
            let buildings = this.props.campuses[0].buildings.map((building: any) => building)
            //returns sorted table row
            return sortBuildingFunction(this.state.sortType, buildings).map((building: any) =>  this.makeTable(building))
        }
        if (filterBuildingsFunction(this.props.campuses[0], this.state.searchTerm).length === 0) {
            return <h4>No Building Found!</h4>
        }
        //filters buildings
        let filteredBuildings = filterBuildingsFunction(this.props.campuses[0], this.state.searchTerm).map((building: any) =>  building);
        //returns sorted table row
        return sortBuildingFunction(this.state.sortType, filteredBuildings).map((building: any) =>  this.makeTable(building));
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
                {this.props.campuses[0].abbrName}
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
    
    //takes a building and makes a table row
    makeTable = (building: any) => {
        return (
            <tr key={`${building.trainingLead.firstName}${this.count++}`}>
                <td><Link to={`/rooms/${building.id}`}><span className="colour-me">{building.name}</span></Link></td>
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