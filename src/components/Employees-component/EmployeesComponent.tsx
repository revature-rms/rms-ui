import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import { filterEmployeesFunction } from '../../utils/helper-functions/filterEmployees';
import {Link} from "react-router-dom";



interface IEmployeesProps {
    employees: any,
    employeesMessage: string,
    getAllEmployees: () => void,
    updateId: (id: number) => void
}

export class EmployeesComponent extends React.Component<IEmployeesProps, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            department: 'All departments',
            searchTerm: ''
        }
    }

    componentDidMount = () => {
        if (this.props.employees === null) {
            this.props.getAllEmployees();
        }
    }

    changeDepartment = (event: any) => {
        this.setState({
            ...this.state,
            department: event.target.value
        })
    }

    updateId = (event: any) => {
        this.props.updateId(parseInt(event.target.id));
    }

    onSearchChange = (e: any) => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    subHeader = () => {
        return (
            <>
                Employee Filter:
                &nbsp;
                <input
                    type="text"
                    placeholder="Type employee's name"
                    onChange={this.onSearchChange}
                />
            </>
        )
    }

    mapEmployees = () => {
        if (this.state.searchTerm.length < 1) {
            return this.props.employees.map((employee: any) => this.makeTable(employee))
        }
        if (filterEmployeesFunction(this.props.employees, this.state.searchTerm).length === 0) {
            return <h4>No Employees Found!</h4>
        }
        return filterEmployeesFunction(this.props.employees, this.state.searchTerm).map((employee: any) => this.makeTable(employee));
    }
    makeTable = (employee: any) => {
        return (
            <tr>
                <td><Link to="/employee-details"><span className="colour-me"id={employee.id} onClick = {this.updateId}>{employee.id}</span></Link></td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
            </tr>
        )
    }
    render() {
        // const selectDepartment = () => {
        //     return (
        //         <DepartmentDropdown change={this.changeDepartment} />
        //     )
        // }

        return (

            <Wrapper title="Employees" elements={this.subHeader()}>
                <Card className="full-card">
                    {/* <b>Selected department:</b> {this.state.department}<br /> */}
                    <div className="tblbox">
                        <div className="tblhdr">
                            Employees
                        </div>
                        {/* <TableData employees={this.props.employees} title="Employees" selected={this.state.department} getId={this.updateId} /> */}
                        <table>
                            <tbody>
                                <tr><td><b>Employee Id:</b></td><td><b>First Name:</b></td><td><b>Last Name :</b></td><td><b>Email:</b></td><td><b>Department:</b></td></tr>
                                {this.props.employees ? this.mapEmployees() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                    <br />
                </Card>
            </Wrapper>
        )
    }
}