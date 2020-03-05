import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Wrapper from '../../utils/div-wrapper/Wrapper';

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
                <Card className="full-card">
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <h4>Employee details</h4>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p"><b>Id:</b> {this.props.employee ? this.props.employee.id : ''}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p"><b>First name:</b>  {this.props.employee ? this.props.employee.firstName : ''}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p"><b>Last name:</b>  {this.props.employee ? this.props.employee.lastName : ''}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p"><b>Email:</b>  {this.props.employee ? this.props.employee.email : ''}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p"><b>Title:</b> {this.props.employee ? this.props.employee.title : ''}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p"><b>Department:</b>  {this.props.employee ? this.props.employee.department : ''}</Typography>
                            <br />
                            <br />
                            <br />

                            <div style={{ fontStyle: 'italic' }}>
                                <strong>Resource Created By: {this.props.employee ? this.props.employee.resourceMetadata.resourceCreator : ''}</strong>
                                <p>Creation Date: {this.props.employee ? this.props.employee.resourceMetadata.resourceCreationDateTime : ''}</p>
                                <p>Last Modified: {this.props.employee ? this.props.employee.resourceMetadata.lastModifiedDate : ''}</p>
                                <p>Modified By: {this.props.employee ? this.props.employee.resourceMetadata.lastModifier : ''}</p>
                                <p>Resource Owner: {this.props.employee ? this.props.employee.resourceMetadata.resourceOwner : ''}</p>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="btn">
                            Edit
                    </Button>
                    </CardActions>
                </Card>
            </Wrapper>
        );
    }

}