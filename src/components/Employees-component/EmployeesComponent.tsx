import React from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Card } from '@material-ui/core';


interface IEmployeesProps {
    employees: any;
}

export class EmployeesComponent extends React.Component<IEmployeesProps, any>{
    
    constructor(props: any) {
        super(props);
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

        return (

            <Wrapper title="employees" elements={element()}>
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
                            </tr>
                            <tr>
                            </tr>
                        </table>
                    </div>
                </Card>
            </Wrapper>
        )
    }
}