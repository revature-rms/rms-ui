import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { throws } from 'assert';


export class HomeComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            currentUser: "",
            building: "",
            update: false
        }
    }

    propsUpdated: boolean = false;

    componentDidMount() {
        this.props.getAllCampuses();
        console.log(this.props.currentUser);

    }
    componentDidUpdate() {
        if (this.props.campuses && this.propsUpdated === false) {
            if (this.props.currentUser.role === 'admin') {
                this.setState({
                    ...this.state,
                    currentUser: this.props.campuses
                });
            }
            else {
                    this.setState({
                        ...this.state,
                        currentUser: this.props.campuses[0]
                    });
            }
            this.propsUpdated = true;
        }
        console.log(this.state.currentUser);
    }

    mapData = () => {
        if (this.state.currentUser !== null) {
            if (this.props.currentUser.role === "admin") {
                return this.state.currentUser.map((campus: any) => {
                    return this.adminTable(campus);
                })
            }
            else {
                return (
                    <tr>
                        <td><span className="colour-me">{this.state.currentUser.name}</span></td>
                        <td>{this.state.currentUser.trainingManager.firstName} {this.state.currentUser.trainingManager.lastName}</td>
                        <td>{this.state.currentUser.buildings.length}</td>
                    </tr>
                )
            }
        }
    }

    adminTable = (campus: any) => {
        console.log(campus.name);
        return (
            <tr>
                <td><span className="colour-me">{campus.name}</span></td>
                <td>{campus.trainingManager.firstName} {campus.trainingManager.lastName}</td>
                <td>{campus.buildings.length}</td>
            </tr>
        )
    }

    render() {
        return (
            <Wrapper data-test="main-content" title={(this.state.currentUser) ? "Welcome, " + this.props.currentUser.firstName + " " + this.props.currentUser.lastName : " "} elements={(this.props.currentUser) ? "Role: " + this.props.currentUser.role : "role"}>
                <div className="full-card">
                    <div className="tblbox">
                        <div className="tblhdr">{(this.state.currentUser) ? this.props.currentUser.username + '\'s resources' : " "}</div>
                        <table>
                            <tbody>
                                <tr><td><b>Campus Name:</b></td><td><b>Training Manager:</b></td><td><b>Number of Buildings:</b></td></tr>
                                {this.state.currentUser ? this.mapData() : <tr><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Wrapper>
        )
    }
}