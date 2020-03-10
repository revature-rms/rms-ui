import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import TableData from "../../utils/tableData-display/tableData";
import Card from '@material-ui/core/Card';
import { getCampuses } from '../../remote/getCampus';

export class BuildingListComponent extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state = {
            data: ""
        }
    }

    async componentDidMount(){
        let campusData = await getCampuses();
        this.setState({
            ...this.state,
            data: campusData
        })
    }

    componentDidUpdate(){
        console.log(this.state.data);
    }

    render() {
        return (
            <>
                 {/* <Wrapper title={this.props.building ? this.props.building.name : "Building Name Here"} elements={this.props.building ? this.props.building.abbrName : "Building abbreviation here."}>
                <div className="full-card">
                    <div className="tblbox">
                        <div className="tblhdr">Rooms in {this.props.building ? this.props.building.abbrName : "Building"}</div>
                        <table>
                            <tbody>
                                <tr><td><b>Room Number:</b></td><td><b>Max Occupancy:</b></td><td><b>Batch:</b></td><td><b>Trainer:</b></td></tr>
                                {this.props.building ? this.mapRooms() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Wrapper> */}
            </>
                )
            }
}