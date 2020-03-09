import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import EditEmpDetails from '../../utils/EditEmpDetailsModel';
import { Link } from 'react-router-dom';
import { employeesReducer } from '../../reducers/employees-reducer';

interface IEmployeeDetailsProps {
    id: any,
    employees: any

}

export class EmployeeDetailsComponent extends React.Component<IEmployeeDetailsProps, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            employee: null,
            fname: '',
            lname: '',
            email: '',
            title: '',
            department: ''
        }

    }

    componentDidMount = () => {
        if (this.props.employees != null) {
            this.props.employees.filter((employee: any) => {
                return employee.id === this.props.id
            }).map((employee: any) => {
                this.setState({
                    ...this.state,
                    employee: employee,
                    fname: employee.firstName,
                    lname: employee.lastName,
                    email: employee.email,
                    title: employee.title,
                    department: employee.department
                })
            })
            console.log(this.state.employee);
        }
    }

    handleChange = (event:any) => {
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }



    render() {
        if (this.state.employee != null) {
            const employee = this.state.employee;
            console.log(employee);

            return (
                <Wrapper title={employee.firstName + " " + employee.lastName}>
                    <div className="half-card">
                        <h4>Employee Details</h4>
                        <b>ID:</b> {employee.id}<br />
                        <b>First Name:</b>  {employee.firstName}<br />
                        <b>Last Name:</b>  {employee.lastName}<br />
                        <b>Email:</b>  {employee.email}<br />
                        <b>Title:</b> {employee.title}<br />
                        <b>Department:</b>  {employee.department}
                    </div>
                    <div className="half-card">
                        <b>Resource Created By:</b> {employee.resourceMetadata.resourceCreator.username}<br />
                        <b>Creation Date:</b> {employee.resourceMetadata.resourceCreationDateTime}<br />
                        <b>Last Modified:</b> {employee.resourceMetadata.lastModifiedDateTime}<br />
                        <b>Modified By:</b> {employee.resourceMetadata.lastModifier.username}<br />
                        <b>Resource Owner:</b> {employee.resourceMetadata.resourceOwner.username}<br />

                        <EditEmpDetails 
                        fname = {this.state.fname}
                        lname = {this.state.lname}
                        email = {this.state.email}
                        title = {this.state.title}
                        department = {this.state.department}
                        onChange= {this.handleChange}
                        />

                    </div>
                </Wrapper>
            );
        } else {
            return (
                <Wrapper>
                    <h3>First Select an employee to view the details. <Link to="/employees">Go back to view all employees</Link> </h3>
                </Wrapper>
            )
        }
    }

}