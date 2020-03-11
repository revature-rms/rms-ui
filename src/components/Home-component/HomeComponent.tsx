import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { throws } from 'assert';


export class HomeComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            currentUser: "",
            building: ""
        }
    }

    propsUpdated: boolean = false;

    componentDidMount() {
        this.props.getAllCampuses();

    }
    componentDidUpdate() {
        if (this.props.campuses && this.propsUpdated === false) {
            this.props.campuses.map((campus: any) => {
                if (campus["trainingManager"]["firstName"] === "Willow" && campus["trainingManager"]["lastName"] === "Jackson") {
                    this.setState({
                        ...this.state,
                        currentUser: campus
                    });
                }
            })
            this.propsUpdated = true;
        }
        console.log(this.state.currentUser);
    }

    mapData = () => {
        return (
            <tr>
                <td><span className="colour-me">{this.state.currentUser.buildings[0].name}</span></td>
                <td>{this.state.currentUser.buildings[0].rooms[0].batch.name}</td>
                <td>{this.state.currentUser.buildings[0].rooms[0].roomNumber}</td>
            </tr>
        )
    }

    render() {
        return (
            <Wrapper title={(this.state.currentUser) ? "Welcome, " +  this.state.currentUser["trainingManager"]["firstName"] + ' ' + this.state.currentUser["trainingManager"]["lastName"] : " "} elements="My Resources">
                <div className="full-card">
                    <div className="tblbox">
                        {/* {this.props.building ? this.props.building.abbrName : "Building"} */}
                        <div className="tblhdr">{(this.state.currentUser) ? "Campus: " + this.state.currentUser["name"] : " "}</div>
                        <table>
                            <tbody>
                                <tr><td><b>Building:</b></td><td><b>Batch:</b></td><td><b>Room:</b></td></tr>
                                {this.state.currentUser ? this.mapData() : <tr><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Wrapper>
        )
    }
}