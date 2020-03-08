import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TableData from "../../utils/tableData-display/tableData";
import DepartmentDropdown from '../../utils/departments-dropdown';


interface IEmployeesProps {
    employees: any,
    employeesMessage: string,
    getAllEmployees: () => void
}

export class EmployeesComponent extends React.Component<IEmployeesProps, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            department: 'All departments'
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


    render() {
        const selectDepartment = () => {
            return (
                <DepartmentDropdown change={this.changeDepartment} />
            )
        }

        return (

            <Wrapper title="Employees" elements={selectDepartment()}>
                <Card className="full-card">

                    <br /> <br />
                    <div className="tblbox">
                        <div className="tblhdr">
                            Employees
                        </div>
                        <TableData employees={this.props.employees} title="Employees" selected={this.state.department} />
                    </div>
                    <br/>
                    <h5>Selected department: <span style= {{color: "red"}}> {this.state.department}</span></h5>
                </Card>
            </Wrapper>
        )
    }
}