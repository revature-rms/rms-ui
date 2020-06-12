import React, { useEffect,useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';
import { getAllEmployeesAPI } from '../../remote/employees';
import {Employee} from '../../dtos/employee';




export interface IEmployeesProps {
    employees: any,
    employeesMessage: string,
    getAllEmployees: () => void,
    updateId: (id: number) => void
}

function EmployeesComponent (){

    const [employeeList, setEmployees] = useState([]);
    useEffect(() =>{
        let employees: Array<any> = [];
        let tempEmployees: Array<any> = [];
        
        // axios request needs to be made to get all employees
        // const getEmployees = async()=>{
        //     employees = await getAllEmployeesAPI();
        // }

        const getEmployees = async()=>{ 
            //await getEmployees

            employees = [{id: 1,
                        firstName: 'firstTest',
                        lastName: 'lastTest',
                        email: 'emailtest@getMaxListeners.com',
                        title: "Manger of Technology",
                        department: "TRAINING",
                        resourceMetadata:null
                        },
                        {id: 2,
                            firstName: 'firstTest2',
                            lastName: 'lastTest2',
                            email: 'emailtest2@getMaxListeners.com',
                            title: "Lead Trainer",
                            department: "TRAINING",
                            resourceMetadata:null
                            }]
                 //@ts-ignore
                setEmployees(employees)
        }
        getEmployees();
    },[]);
    return (
        <>
            <Wrapper data-test = "main-content" title = {"Employees Whoop Whoop"} elements = {"More Employees Whoop"}>
                <div className = "full-card">
                    <div className = "tblbox">
                        <MaterialTable
                            columns = {[
                                {title: 'Id', field: 'id'},
                                {title: 'First Name', field: 'firstName'},
                                {title: 'Last Name', field: 'lastName'},
                                {title: 'Email', field: 'email'},
                                {title: 'Title', field: 'title'},
                                {title: 'Department', field: 'department'},
                            ]}
                            data = {employeeList}
                            title = "Employees"
                            />
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default EmployeesComponent;
