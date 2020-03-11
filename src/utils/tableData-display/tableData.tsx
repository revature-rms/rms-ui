import React from 'react';
import { Link } from "react-router-dom";



const TableData = (props: any) => {

    return (
        props.employees != null ?
            <table>
                <thead>
                    <tr>
                        <th><b>ID</b></th>
                        <th><b>FIRST NAME</b></th>
                        <th><b>LAST NAME</b></th>
                        <th><b>EMAIL</b></th>
                        <th><b>DEPARTMENT</b></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.selected === "All departments" ?
                            props.employees.map((emp: any) => {
                                return (
                                    <tr key={emp.id ? emp.id.toString() : 0}>
                                        <td key={emp.id + "" + emp.firstName}><Link to="/employee-details" onClick = {props.getId}><span className="colour-me">{emp.id}</span></Link></td>
                                        <td key={emp.firstName}>{emp.firstName}</td>
                                        <td key={emp.lastName}>{emp.lastName}</td>
                                        <td key={emp.email}>{emp.email}</td>
                                        <td key={emp.department}>{emp.department}</td>
                                    </tr>
                                );
                            }) :
                            props.employees.filter((filtered: any) => {
                                return filtered.department === props.selected
                            }).map((emp: any) => {
                                return (

                                    <tr key={emp.id ? emp.id.toString() : 0}>
                                        <td key={emp.id + "" + emp.firstName}><Link to="/employee-details" onClick = {props.getId}><span className="colour-me">{emp.id}</span></Link></td>
                                        <td key={emp.firstName}>{emp.firstName}</td>
                                        <td key={emp.lastName}>{emp.lastName}</td>
                                        <td key={emp.email}>{emp.email}</td>
                                        <td key={emp.department}>{emp.department}</td>
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