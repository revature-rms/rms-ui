import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import EditEmpDetails from '../../utils/EditEmpDetailsModal';
import { Link } from 'react-router-dom';
import { updateEmployeeAPI } from '../../remote/employees';


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
            this.props.employees.Employee.filter((employee: any) => {
                return employee.id === this.props.id
            }).map((employee: any) => {
                this.setState({
                    ...this.state,
                    employee: employee,
                    fname: employee.firstName,
                    lname: employee.lastName,
                    email: employee.email,
                    title: employee.title,
                    department: employee.department,
                    updateInfo: ''
                })
            })
        }
    }

    handleChange = (event:any) => {
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleUpdate = () => {

        // updated employee json
        let updatedEmployee = {
            firstName: this.state.fname,
            lastName: this.state.lname,
            email: this.state.email,
            title: this.state.title,
            department: this.state.department
        }

        let empId = this.props.id

        // Calling the API to update employee data
        updateEmployeeAPI(empId, updatedEmployee).then((res:any) => {
            this.setState({updateInfo: 'Employee successfully updated!'});
            console.log(res);   
        }).catch(err => {
            this.setState({updateInfo:'Failed to update employee. Try again'})
            console.log(err);
            
        })
        
    }



    render() {
        if (this.state.employee != null) {
            const employee = this.state.employee;

            return (
                // content wrapped in imported wrapper function in order to enforce same styling logic for all components.
                <Wrapper data-test="main-content" title={employee.firstName + " " + employee.lastName} elements={<Link to="/employees">&lt; Back</Link>}>
                    <div className="full-card">
                        <h4>Employee Details</h4>
                        <b>ID:</b> {employee.id}<br />
                        <b>First Name:</b>  {employee.firstName}<br />
                        <b>Last Name:</b>  {employee.lastName}<br />
                        <b>Email:</b>  {employee.email}<br />
                        <b>Title:</b> {employee.title}<br />
                        <b>Department:</b>  {employee.department}

                        <br/>
                        <EditEmpDetails  // this imports a modal that receive props needed to update the details of an employee selected.
                        fname = {this.state.fname}
                        lname = {this.state.lname}
                        email = {this.state.email}
                        title = {this.state.title}
                        department = {this.state.department}
                        handleChange= {this.handleChange}
                        updateEmpDetails = {this.handleUpdate}
                        updateMessage = {this.state.updateInfo}                       
                        />
                    </div>
                    <div className="half-card">
                        <b>Resource Created By:</b> {employee.resourceMetadata.resourceCreator.username}<br />
                        <b>Creation Date:</b> {employee.resourceMetadata.resourceCreationDateTime.substring(0,10)}<br />
                        <b>Last Modified:</b> {employee.resourceMetadata.lastModifiedDateTime.substring(0,10)}<br />
                        <b>Modified By:</b> {employee.resourceMetadata.lastModifier.username}<br />
                        <b>Resource Owner:</b> {employee.resourceMetadata.resourceOwner.username}<br />

                    </div>
                </Wrapper>
            );
        } else {
            return ( // if no id selected, nothing is returned.
                <Wrapper>
                    <h3>Select an employee to view the details. <Link to="/employees">Go back to employees table</Link> </h3>
                </Wrapper>
            )
        }
    }

}