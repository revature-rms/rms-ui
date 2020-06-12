import React, { useState, useEffect } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';
import {getAllcampusAPI} from '../../remote/campus'

export interface IHomeProps {
    //Change any to appUser model later
    currentUser: any;
}
function HomeComponent(){

    const [campus, setCampus] = useState ([])

    useEffect(() => {
        let campuses: Array<any> = [];

        const getBuildings = async () => {
            // await getCampuses();

            campuses = [
                {id: 1,
                name: "Campus A",
                abbrName: "CA",
                trainer: "Trainer1",
                buildings: [
                            {id: 1, 
                            name: "Muma College of Business",
                            physicalAddress: "456 N Main st",
                            trainingLead: "Bob"
                            },
                            {id: 2, 
                            name: "Benson Building",
                            physicalAddress: "2626 W State st",
                            trainingLead: "Bill"
                            }]
                        },
                {id: 2,
                    name: "Campus B",
                    abbrName: "CB",
                    buildings: [
                                {id: 3, 
                                name: "Eyering Science Center",
                                physicalAddress: "333 N 750 W",
                                trainingLead: "Suzy"
                                },
                                {id: 4, 
                                name: "Wilkinson Student Center",
                                physicalAddress: "100 W 600 N",
                                trainingLead: "Sean"
                                }]

                        }]

            console.log("campuses", campuses)
            campuses.forEach(campus => {
                //@ts-ignore
                campus.buildings.forEach(building => {
                    tempBuildings.push(building)
                })
            })
            //@ts-ignore
            setBuildings(tempBuildings)
        }

        getBuildings();



    }, []);
    // componentDidMount() {
    //     this.props.getAllCampuses();
    //     console.log(this.props.currentUser);

    // }
    // componentDidUpdate() {
    //     if (this.props.campuses && this.propsUpdated === false) {
    //         if (this.props.currentUser.role === 'admin') {
    //             this.setState({
    //                 ...this.state,
    //                 currentUser: this.props.campuses
    //             });
    //         }
    //         else {
    //                 this.setState({
    //                     ...this.state,
    //                     currentUser: this.props.campuses[0]
    //                 });
    //         }
    //         this.propsUpdated = true;
    //     }
    //     console.log(this.state.currentUser);
    // }

    // mapData = () => {
    //     if (this.state.currentUser !== null) {
    //         if (this.props.currentUser.role === "admin") {
    //             return this.state.currentUser.map((campus: any) => {
    //                 return this.adminTable(campus);
    //             })
    //         }
    //         else {

            //     return (
            //         <tr>
            //             <td><span className="colour-me">{this.state.currentUser.name}</span></td>
            //             <td>{this.state.currentUser.trainingManager.firstName} {this.state.currentUser.trainingManager.lastName}</td>
            //             <td>{this.state.currentUser.buildings.length}</td>
            //         </tr>
            //     )
            // }
    //     }
    // }

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

    let building = {
        campus: campus.name;
        trainer: campus.trainer;
        numberOfBuildings: campus.buildings.length;
    }

    return (
        <>
            <Wrapper data-test="main-content" title={"Current User"} elements={"Campus abbreviation here."}>
                <div className="full-card">
                    <div className="tblbox">
                        < MaterialTable
                            columns = {[
                                { title: 'Campus Name', field: 'campuses'},
                                { title: 'Training Manager', field: 'trainingLead' },
                                { title: 'Number of Buildings', field: 'buildings'},
                            ]}
                            data = {buildings}
                            title = "Campus"

                        />
                    </div>
                </div>
            </Wrapper>
        </>
    )
        // return (
        //     <Wrapper data-test="main-content" title={(this.state.currentUser) ? "Welcome, " + this.props.currentUser.firstName + " " + this.props.currentUser.lastName : " "} elements={(this.props.currentUser) ? "Role: " + this.props.currentUser.role : "role"}>
        //         <div className="full-card">
        //             <div className="tblbox">
        //                 <div className="tblhdr">{(this.state.currentUser) ? this.props.currentUser.username + '\'s resources' : " "}</div>
        //                 <table>
        //                     <tbody>
        //                         <tr>
        //                             <td><b>Campus Name:</b></td>
        //                             <td><b>Training Manager:</b></td>
        //                             <td><b>Number of Buildings:</b></td>
        //                         </tr>
        //                         {this.state.currentUser ? this.mapData() : <tr><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </Wrapper>
        // )
    }
}