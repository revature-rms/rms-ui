import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Grid, Card, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import { getAllEmployees } from '../../remote/employee-service';
import { Employee } from '../../dtos/employee';
import { AppUser } from '../../dtos/appUser';





export interface IEmployeesProps {
    employees: any,
    employeesMessage: string,
    getAllEmployees: () => void,
    updateId: (id: number) => void
}
/**
 * Will provide all the employees that a user is in charge of (depending on what user is signed in)
 * Each employee will be rendered with EmployeeDetailsComponent when it is clicked
 * Role needed: Training Site Manager
 * Endpoint: .../employees
 * 
 * TODO: 
 * Axios request is needed to complete the table. 
 * details button still needs to be added.
 */
export default function EmployeesComponent(props: IEmployeesProps) {

    const history = useHistory();
    const [employeeList, setEmployees] = useState([]);

    useEffect(() => {  
        getEmployees();
    }, []);

    // axios request needs to be made to get all employees
    // const getEmployees = async()=>{
    //     employees = await getAllEmployeesAPI();
    // }
    const getEmployees = async () => {
        //await getEmployees

        let employees: Array<any> = [];
        let tempEmployees: Array<any> = [];

        employees = (await getAllEmployees()).data
        //@ts-ignore
        setEmployees(employees)
    }

    return (
        <>
            <div className="display-wrapper">

                <Card>
                    <div className="table-wrapper">
                        <MaterialTable
                            columns={[
                                { title: 'Id', field: 'id' },
                                { title: 'First Name', field: 'firstName' },
                                { title: 'Last Name', field: 'lastName' },
                                { title: 'Email', field: 'email' },
                                { title: 'Title', field: 'title' },
                                { title: 'Department', field: 'department' },
                            ]}
                            //@ts-ignore
                            onRowClick={(event, rowData) => history.push(`/employee-details`)}
                            data={employeeList}
                            title="Employees"
                        />
                    </div>
                </Card>
            </div>
        </>
    )
}
