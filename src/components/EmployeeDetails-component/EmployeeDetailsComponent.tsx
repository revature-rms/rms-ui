import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import EditEmpDetails from '../../utils/EditEmpDetailsModel';

interface IEmployeeDetailsProps {
    employee: any
}

export class EmployeeDetailsComponent extends React.Component<IEmployeeDetailsProps, any>{

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <Wrapper title={this.props.employee ? this.props.employee.firstName + " " + this.props.employee.lastName : ""}>
                <div className="half-card">
                    <h4>Employee Details</h4>
                    <b>ID:</b> {this.props.employee ? this.props.employee.id : ''}<br/>
                    <b>First Name:</b>  {this.props.employee ? this.props.employee.firstName : ''}<br/>
                    <b>Last Name:</b>  {this.props.employee ? this.props.employee.lastName : ''}<br/>
                    <b>Email:</b>  {this.props.employee ? this.props.employee.email : ''}<br/>
                    <b>Title:</b> {this.props.employee ? this.props.employee.title : ''}<br/>
                    <b>Department:</b>  {this.props.employee ? this.props.employee.department : ''}
                </div>
                <div className="half-card">
                    <b>Resource Created By:</b> {this.props.employee ? this.props.employee.resourceMetadata.resourceCreator : ''}<br/>
                    <b>Creation Date:</b> {this.props.employee ? this.props.employee.resourceMetadata.resourceCreationDateTime : ''}<br/>
                    <b>Last Modified:</b> {this.props.employee ? this.props.employee.resourceMetadata.lastModifiedDate : ''}<br/>
                    <b>Modified By:</b> {this.props.employee ? this.props.employee.resourceMetadata.lastModifier : ''}<br/>
                    <b>Resource Owner:</b> {this.props.employee ? this.props.employee.resourceMetadata.resourceOwner : ''}<br/>
                    
                    <EditEmpDetails/>
                
                </div>
            </Wrapper>
        );
    }

}