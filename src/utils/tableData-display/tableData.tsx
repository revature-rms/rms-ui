import React from 'react';
import { Link } from "react-router-dom";



const TableData = (props: any) => {

    return (
        props.employees != null ?
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>DEPARTMENT</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.selected === "All departments" ?
                            props.employees.map((emp: any) => {
                                return (
                                    <tr key={emp.id ? emp.id.toString() : 0}>
                                        <td key={emp.id + "" + emp.firstName}>{emp.id}</td>
                                        <td key={emp.firstName}>{emp.firstName}</td>
                                        <td key={emp.lastName}>{emp.lastName}</td>
                                        <td key={emp.email}>{emp.email}</td>
                                        <td key={emp.department}>{emp.department}</td>
                                        <td key={emp.id}><Link to="/employee-details" style={{ fontStyle: "italic" }}><small>View details</small></Link></td>
                                    </tr>
                                );
                            }) :
                            props.employees.filter((filtered: any) => {
                                return filtered.department === props.selected
                            }).map((emp: any) => {
                                return (

                                    <tr key={emp.id ? emp.id.toString() : 0}>
                                        <td key={emp.id + "" + emp.firstName}>{emp.id}</td>
                                        <td key={emp.firstName}>{emp.firstName}</td>
                                        <td key={emp.lastName}>{emp.lastName}</td>
                                        <td key={emp.email}>{emp.email}</td>
                                        <td key={emp.department}>{emp.department}</td>
                                        <td key={emp.id}><Link to="/employee-details" style={{ fontStyle: "italic" }}><small>View details</small></Link></td>
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

export default TableData;