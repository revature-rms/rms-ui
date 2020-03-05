import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';


interface IEmployeesProps {
    employees: any,
    employeesMessage: string,
    getAllEmployees: () => void
}

export class EmployeesComponent extends React.Component<IEmployeesProps, any>{

    constructor(props: any) {
        super(props);
    }

    componentDidMount = () => {
        if (this.props.employees === null) {
            this.props.getAllEmployees();
        }
    }
    getAll = () => {
        this.props.getAllEmployees();
    }


    render() {

        const element = () => {
            return (
                <label htmlFor="employees-options"> Select option to filter:
                    <select name="" id="employees-options">
                        <option value="All-departments">All departments</option>
                        <option value="Another-department">Another department</option>
                    </select>
                </label>
            )
        }

        const tableData = () => {

            return (

                <tr>
                    {
                        //this will be replaced by the actual API data
                    }
                    <td>#</td>
                    <td>Sample FN</td>
                    <td>Sample LN</td>
                    <td>Sample email</td>
                    <td>Sample department</td>
                    <td><Link to="/employee-details" style={{ fontStyle: "italic" }}><small>View details</small></Link></td>
                </tr>
            )
        }

        return (

            <Wrapper title="Employees" elements={element()}>
                <Card className="full-card">

                    <br /> <br />
                    <div className="tblbox">
                        <div className="tblhdr">
                            Employees
                        </div>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>EMAIL</th>
                                <th>DEPARTMENT</th>
                                <th></th>
                            </tr>
                            {tableData()}
                        </table>
                        {
                            // elements below are still under test
                        }
                        <button onClick={this.getAll}>Test - get employees</button>
                        <br />
                        <br />
                        <p>{this.props.employeesMessage}</p>
                        <p>{this.props.employees ? this.props.employees.length : ''}</p>
                    </div>
                </Card>
            </Wrapper>
        )
    }
}