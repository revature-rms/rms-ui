import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import TableData from "../../utils/tableData-display/tableData";
import DepartmentDropdown from '../../utils/departments-dropdown';
import Card from '@material-ui/core/Card';


interface IEmployeesProps {
    employees: any,
    employeesMessage: string,
    getAllEmployees: () => void,
    updateId: (id:number)   => void
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

    updateId = (event:any) => {   
            this.props.updateId (parseInt(event.target.id));
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
                <b>Selected department:</b> {this.state.department}<br/>
                    <div className="tblbox">
                        <div className="tblhdr">
                            Employees
                        </div>
                        <TableData employees={this.props.employees} title="Employees" selected={this.state.department} getId= {this.updateId}/>
                    </div>
                    <br/>
                </Card>
            </Wrapper>
        )
    }
}