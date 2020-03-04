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
            <Card style={{}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Employee details
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Id: {this.props.employee ? this.props.employee.id : ''}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">First name:  {this.props.employee ? this.props.employee.firstName : ''}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Last name:  {this.props.employee ? this.props.employee.lastName : ''}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Email:  {this.props.employee ? this.props.employee.email : ''}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Title: {this.props.employee ? this.props.employee.title : ''}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Department:  {this.props.employee ? this.props.employee.department : ''}</Typography>
                        <br />
                        <br />
                        <br />

                        <div style={{ fontStyle: 'italic' }}>
                            <strong>Resource created by: {this.props.employee ? this.props.employee.resourceMetadata.resourceCreator : ''}</strong>
                            <p>created on: {this.props.employee ? this.props.employee.resourceMetadata.resourceCreationDateTime : ''}</p>
                            <p>Last modified on: {this.props.employee ? this.props.employee.resourceMetadata.lastModifiedDate : ''}</p>
                            <p>Modified by: {this.props.employee ? this.props.employee.resourceMetadata.lastModifier : ''}</p>
                            <p>Ressource owner: {this.props.employee ? this.props.employee.resourceMetadata.resourceOwner : ''}</p>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </CardActions>
            </Card>
        );
    }

}