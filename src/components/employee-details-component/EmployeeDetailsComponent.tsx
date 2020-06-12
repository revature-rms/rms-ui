import React, { useEffect,useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import EditEmpDetails from '../../utils/EditEmpDetailsModal';
import { Link } from 'react-router-dom';
import { updateEmployeeAPI } from '../../remote/employees';
import { Employee } from '../../dtos/employee';
import { Grid, FormControl, InputLabel, Input, Card, Button } from '@material-ui/core';



export interface IEmployeeDetailsProps {
    id: any,
    employees: any

}

export function EmployeeDetailsComponent(){

    let mockEmployee = new Employee(
        1,
        "testFN",
        "test LN",
        "test@test.com",
        "test title",
        "test dept",
        //@ts-ignore
        null as ResourceMetadata
    )

    const [editing, setEditing] = useState(false);
    const [firstNameState, setFirstName] = useState(mockEmployee.firstName);
    const [lastNameState, setLastName] = useState(mockEmployee.lastName);
    const [emailState, setEmail] = useState(mockEmployee.email);
    const [titleState, setTitle] = useState(mockEmployee.title);
    const [deptState, setDept] = useState(mockEmployee.department);
    const [ResourceState, setResource] = useState(mockEmployee.resourceMetaData);
    const [employee, setEmployee] = useState(mockEmployee);


    const enableEdit = () =>{
        setEditing(true);
    }

    const save = ()=>{
        setEmployee({...mockEmployee,
                    firstName: firstNameState,
                    lastName: lastNameState,
                    email: emailState,
                    title: titleState,
                    department: deptState
        });
        setEditing(false);
    }

    const cancel = ()=>{
        setEditing(false);
    }

    const setInfo = (event: any) =>{
        switch(event.target.id){
            case "firstName":
                setFirstName(event.target.value);
                break;
            case"lastName":
                setLastName(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;  
            case "title":
                setTitle(event.target.value);
                break;
            case "department":
                setDept(event.target.value);
                break;
            
        }
    }

    return (
        <>
            <Wrapper data-test="main-content" title={employee.firstName} elements = {"Campus Name Here"}>
                <Grid container> 
                    <Grid item xs={12}>
                        <Card className = "full-card">
                            <div id = "employee-form">
                                <FormControl>
                                    <InputLabel>Employee First Name:</InputLabel>
                                    {editing?
                                    <Input id = "firstName" defaultValue={employee.firstName} disabled={!editing} onChange={setInfo} inputProps={{'aria-label':'description'}} />:
                                    <Input id = "firstName" value={employee.firstName} disabled={!editing} onChange={setInfo} inputProps={{'aria-label':'description'}} />}
                                </FormControl>
                                <br/>
                                <FormControl>
                                    <InputLabel> Employee Last Name:</InputLabel>
                                    {editing?
                                    <Input id = "lastName" defaultValue={employee.lastName} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />:
                                    <Input id = "lastName" value={employee.lastName} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />}
                                </FormControl>
                                <br/>
                                <FormControl>
                                    <InputLabel> Employee Email:</InputLabel>
                                    {editing?
                                    <Input id = "email" defaultValue={employee.email} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />:
                                    <Input id = "email" value={employee.email} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />}
                                </FormControl>
                                <br/>
                                <FormControl>
                                    <InputLabel>Employee Title:</InputLabel>
                                    {editing?
                                    <Input id = "title" defaultValue={employee.title} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />:
                                    <Input id = "title" value={employee.title} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />}
                                </FormControl>
                                <br/>
                                <FormControl>
                                    <InputLabel>Employee Department</InputLabel>
                                    {editing?
                                    <Input id = "department" defaultValue={employee.department} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />:
                                    <Input id = "department" value={employee.department} disabled={!editing} onChange = {setInfo} inputProps={{'aria-label':'description'}} />}
                                </FormControl>
                            </div>

                        </Card>
                    </Grid>
                </Grid>
            </Wrapper>
        </>
    )

}