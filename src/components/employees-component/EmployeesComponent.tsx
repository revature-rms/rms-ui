import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Grid, Card, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import { getAllEmployees as getAllEmployeesAPI, getAllEmployeeById } from '../../remote/employee-service';
import { Employee } from '../../dtos/employee';
import { AppUser } from '../../dtos/appUser';
import { ResourceMetadata } from '../../dtos/resourceMetadata';
import CampusListComponent from '../campus-component/CampusListComponent';





export interface IEmployeesProps {
    currentUser: AppUser;
}
/**
 * Will provide all the employees that a user is in charge of (depending on what user is signed in)
 * Each employee will be rendered with EmployeeDetailsComponent when it is clicked
 * Role needed: Training Site Manager
 * Endpoint: .../employees
 * 
 * TODO: 
 * Axios request is needed to complete the table. 
 */
export default function EmployeesComponent(props: IEmployeesProps) {

    //@ts-ignore
    const [employeeList, setEmployeeList] = useState<Array<Employee>>([]);
    const [table, setTable] = useState<any>(null);
    let myEmployees: Array<Employee> = [];
    const history = useHistory();

    const getAllEmployees = async() =>{
        let employeeList: Array<Employee> = (await getAllEmployeesAPI()).data;
        employeeList.forEach(employee =>{
            myEmployees.push(employee)
        })
        setEmployeeList(myEmployees);
    }

    const getEmployees = async ()=> {
        let employeeList: Array<Employee> = (await getAllEmployeeById(props?.currentUser?.id)).data;
        employeeList.forEach(employee =>{
            myEmployees.push(employee);
        })
        setEmployeeList(myEmployees);
    }

    
    
    useEffect(()=>{
        if(props.currentUser?.role.includes("Admin")){
            getAllEmployees();
            console.log(employeeList);
        } else if(props.currentUser?.role.includes("Training Site Manager")){
            getEmployees();
            console.log(employeeList);
        }
    }, []);
    console.log(employeeList);
    
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
