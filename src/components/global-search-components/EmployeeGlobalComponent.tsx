import React from 'react';
import { allData } from '../../remote/allData';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import EditEmpDetails from '../../utils/EditEmpDetailsModal';
import { updateEmployeeAPI } from '../../remote/employee-service';
import { Link } from 'react-router-dom';


export class EmployeeGlobalComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            employee: "",
        }
    }
    resources:any = "";
    id: any;

    async componentDidMount() {
        this.resources = await this.gatherData();
        //gets route parameter
        this.id = this.props.match.params.id;
       this.setEmployee();
       console.log(this.state.employee);
    }

    setEmployee = () => {
        if (this.resources.Employee) {
            this.resources.Employee.map((employee: any) => {
                //sees if employee info matches route parameter
                if (employee["firstName"] + employee["lastName"] + employee["id"] === this.id) {
                    if(this.state.employee.length === 0 || this.state.employee.firstName + this.state.employee.lastName + this.state.employee.id !== this.id)
                    this.setState({
                        employee: employee
                    })
                }
            })
        }
    }
    componentDidUpdate() {
        this.id = this.props.match.params.id;
        this.setEmployee()
    }

    gatherData = async () => {
        let apiData = await allData();
        return apiData;
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

        let empId = this.state.employee.id

        // Calling the API to update employee data
        updateEmployeeAPI(empId, updatedEmployee).then((res:any) => {
            this.setState({updateInfo: 'Employee successfully updated!'});
            console.log(res);   
        }).catch(err => {
            this.setState({updateInfo:'Failed to update employee. Try again'})
            console.log(err);
            
        })
        
    }

    render(){
        return(
            <Wrapper data-test="main-content" title={this.state.employee.firstName + " " + this.state.employee.lastName} elements={<Link to="/employees">&lt; Back</Link>}>
            <div className="full-card">
                <h4>Employee Details</h4>
                <b>ID:</b> {this.state.employee.id}<br />
                <b>First Name:</b>  {this.state.employee.firstName}<br />
                <b>Last Name:</b>  {this.state.employee.lastName}<br />
                <b>Email:</b>  {this.state.employee.email}<br />
                <b>Title:</b> {this.state.employee.title}<br />
                <b>Department:</b>  {this.state.employee.department}

                <br/>
                <EditEmpDetails 
                fname = {this.state.employee.firstName}
                lname = {this.state.employee.lastName}
                email = {this.state.employee.email}
                title = {this.state.employee.title}
                department = {this.state.employee.department}
                handleChange= {this.handleChange}
                updateEmpDetails = {this.handleUpdate}
                updateMessage = {this.state.updateInfo}                       
                />
            </div>
            <div className="half-card">
                <b>Resource Created By:</b>{(this.state.employee) ? this.state.employee.resourceMetadata.resourceCreator.username : 'Unavailable'}<br />
                <b>Creation Date:</b> {(this.state.employee) ? this.state.employee.resourceMetadata.resourceCreationDateTime.substring(0,10) : 'Unavailable'}<br />
                <b>Last Modified:</b> {(this.state.employee) ? this.state.employee.resourceMetadata.lastModifiedDateTime.substring(0,10) : 'Unavailable'}<br />
                <b>Modified By:</b> {(this.state.employee) ? this.state.employee.resourceMetadata.lastModifier.username : 'Unavailable'}<br />
                <b>Resource Owner:</b> {(this.state.employee) ? this.state.employee.resourceMetadata.resourceOwner.username : 'Unavailable'}<br />

            </div>
        </Wrapper>
        )
    }
}