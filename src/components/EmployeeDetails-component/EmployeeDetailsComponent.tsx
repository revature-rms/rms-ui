import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IEmployeeDetailsProps {
    employee: any
}

export class EmployeeDetailsComponent extends React.Component<IEmployeeDetailsProps, any>{

    constructor(props: any) {
        super(props)
    }


    render() {

        return (
            <div className="section-box">
                <div className="section-hdr">
                    <h1>{this.props.employee ? this.props.employee.firstName : ''} {this.props.employee ? this.props.employee.lastName : ''}</h1>
                    <div className="subnav"></div>
                </div>
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
                    <button className="btn">
                        Edit
                    </button>
                </div>
            </div>
        );
    }

}