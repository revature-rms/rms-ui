import React from 'react';
import { Link } from "react-router-dom";



const CampusTable = (props: any) => {

    return (
        props.campuses != null ?
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>LOCATION</th>
                        <th>TRAINING MANAGER</th>
                        <th>STAGING MANAGER</th>
                        <th>HR LEAD</th>
                        <th># OF BUILDINGS</th>
                        <th># OF EMPLOYEES</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.selected === "All locations" ?
                            props.campuses.map((camp: any) => {
                                return (
                                    <tr key={camp.id ? camp.id.toString() : 0}>
                                        <td key={camp.id + "" + camp.name}>{camp.id}</td>
                                        <td key={camp.name}>{camp.name}</td>
                                        <td key={camp.shippingAddress.unit_street}>{camp.shippingAddress.unit_street}, {camp.shippingAddress.city}, {camp.shippingAddress.state}</td>
                                        <td key={camp.trainingManager.firstName}>{camp.trainingManager.firstName} {" "} {camp.trainingManager.lastName} </td>
                                        <td key={camp.stagingManager.lastName}>{camp.stagingManager.firstName + " " + camp.stagingManager.lastName}</td>
                                        <td key={camp.hrLead.lastName}>{camp.hrLead.firstName + " " + camp.hrLead.lastName}</td>
                                        <td key={"length" + camp.buildings.length}>{camp.buildings.length}</td>
                                        <td key={"EmpLength" + camp.corporateEmployees.length}>{camp.corporateEmployees.length}</td>
                                        <td key={camp.id}><Link to="/campus" style={{ fontStyle: "italic" }} ><small id={camp.id} onClick={props.getId}>View details</small></Link></td>
                                    </tr>
                                );
                            })
                            :
                            props.campuses.filter((filtered: any) => {
                                return (filtered.shippingAddress.unit_street + " " + filtered.shippingAddress.city + " " + filtered.shippingAddress.state).includes(props.selected)
                            }).map((camp: any) => {
                                return (

                                    <tr key={camp.id ? camp.id.toString() : 0}>
                                        <td key={camp.id + "" + camp.name}>{camp.id}</td>
                                        <td key={camp.name}>{camp.name}</td>
                                        <td key={camp.shippingAddress.unit_street}>{camp.shippingAddress.unit_street}, {camp.shippingAddress.city}, {camp.shippingAddress.state}</td>
                                        <td key={camp.trainingManager.firstName}>{camp.trainingManager.firstName} {" "} {camp.trainingManager.lastName} </td>
                                        <td key={camp.stagingManager.lastName}>{camp.stagingManager.firstName + " " + camp.stagingManager.lastName}</td>
                                        <td key={camp.hrLead.lastName}>{camp.hrLead.firstName + " " + camp.hrLead.lastName}</td>
                                        <td key={"length" + camp.buildings.length}>{camp.buildings.length}</td>
                                        <td key={"EmpLength" + camp.corporateEmployees.length}>{camp.corporateEmployees.length}</td>
                                        <td key={camp.id}><Link to="/campus" style={{ fontStyle: "italic" }} ><small id={camp.id} onClick={props.getId}>View details</small></Link></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
            :
            <h5>No {props.title} data found</h5>
    )
}

export default CampusTable;