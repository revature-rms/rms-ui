import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import { filterEmployeesFunction } from '../../utils/helper-functions/filterEmployees';
import { Link } from "react-router-dom";
import { sortEmployeesFunction } from '../../utils/helper-functions/sortEmployeesFunction';



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
            searchTerm: '',
            sortType: 'ascending'
        }
    }

    componentDidMount = () => {
        if (this.props.employees === null) {
            this.props.getAllEmployees();
        }
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
    sortChanger = (e: any) => {
        this.setState({
            ...this.state,
            sortType: e.target.value
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

    mapEmployees = () => {
            if (this.state.searchTerm.length < 1 && this.props.employees.Employee) {
                return sortEmployeesFunction(this.state.sortType, this.props.employees.Employee).map((emp:any) => this.makeTable(emp));
            }
            this.props.employees.Employee.map((em:any) => console.log(em))
            if (filterEmployeesFunction(this.props.employees.Employee, this.state.searchTerm).length === 0) {
                return <h4>No Employees Found!</h4>
            }
            let employees = filterEmployeesFunction(this.props.employees.Employee, this.state.searchTerm);
            return sortEmployeesFunction(this.state.sortType, employees).map((emp:any) => this.makeTable(emp));
    }
    count = 0;
    makeTable = (employee: any) => {
        return (
            <tr key={`${this.count++}`}>
                <td><Link to="/employee-details"><span className="colour-me" id={employee.id} onClick={this.updateId}>{employee.id}</span></Link></td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
            </tr>
        )
    }
    render() {

        return (

            <Wrapper data-test="main-content" title="Employees" elements={this.subHeader()}>
                <Card className="full-card">
                  
                    <div className="tblbox">
                        <div className="tblhdr">
                            Employees
                        </div>
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