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
                                        <td key={camp.shippingAddress.unit_street}>{camp.shippingAddress.unit_street}</td>
                                        <td key={camp.email}>{camp.email}</td>
                                        <td key={camp.department}>{camp.department}</td>
                                        <td key={camp.id}><Link to="/employee-details" style={{ fontStyle: "italic" }} ><small id={camp.id} onClick = {props.getId}>View details</small></Link></td>
                                    </tr>
                                );
                            }) :
                            props.employees.filter((filtered: any) => {
                                return filtered.department === props.selected
                            }).map((camp: any) => {
                                return (

                                    <tr key={camp.id ? camp.id.toString() : 0}>
                                        <td key={camp.id + "" + camp.firstName}>{camp.id}</td>
                                        <td key={camp.firstName}>{camp.firstName}</td>
                                        <td key={camp.lastName}>{camp.lastName}</td>
                                        <td key={camp.email}>{camp.email}</td>
                                        <td key={camp.department}>{camp.department}</td>
                                        <td key={camp.id}><Link to="/employee-details" style={{ fontStyle: "italic" }}><small id={camp.id} onClick = {props.getId}>View details</small></Link></td>
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