import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import EditEmpDetails from '../../utils/EditEmpDetailsModal';


import { Link, useHistory } from 'react-router-dom';
import { getEmployeeByIdAPI } from '../../remote/employee-service';
import { Employee } from '../../dtos/employee';
import { Grid, FormControl, InputLabel, Input, Card, Button } from '@material-ui/core';
import { AppUser } from '../../dtos/appUser';


export interface IEmployeeDetailsProps {


}
/**
 * Employee Details component will render an employees first name, last name, email, title, and department.
 * Employees details are not editable until EDIT button is clicked. 
 * Once employee details are finished being updated click save to commit the changes.
 * Click Cancel button to cancel any changes made to employee details.
 * 
 * 
 * 
 * TODO: 
 * Resource meta data table at the bottom styling is off and all the values are squished together. 
 * Input value for each Form Control is commented out to get the page to render. Will need to uncomment out the values when we receive receive resource meta data
 * that is not null. 
 * 
 */
export function EmployeeDetailsComponent(props: IEmployeeDetailsProps) {


    //@ts-ignore
    const [employee, setEmployee] = useState<Employee>(null as Employee);
    const [editing, setEditing] = useState(false);
    const [firstNameState, setFirstName] = useState(employee?.firstName);
    const [lastNameState, setLastName] = useState(employee?.lastName);
    const [emailState, setEmail] = useState(employee?.email);
    const [titleState, setTitle] = useState(employee?.title);
    const [deptState, setDept] = useState(employee?.department);
    const history = useHistory();
   
    /**
     * toggles between editing and non-editing mode
     */
    const enableEdit = () => {
        setEditing(true);
    }

    /**
     * persists changes to MSA (Whole object)
     * ***NOT IMPLEMENTED****
     */
    const save = () => {
        setEmployee({
            ...employee,
            firstName: firstNameState,
            lastName: lastNameState,
            email: emailState,
            title: titleState,
            department: deptState
        });
        setEditing(false);
    }

    /**
     * toggles back to non-editing state upon clicking cancle button without persisting
     */
    const cancel = () => {
        setEditing(false);
    }

     /**
     * sets pieces of local info state upon changing in edit mode
    */
    const setInfo = (event: any) => {
        switch (event.target.id) {
            case "firstName":
                setFirstName(event.target.value);
                break;
            case "lastName":
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
/**
 * getEmployee will call getEmployeeByIdAPI to obtain information from the database. 
 * Once the data has been obtained from the database it will set that data to employee. 
 * @param id 
 */
    const getEmployee = async(id: number) =>{
        let thisEmployee = (await getEmployeeByIdAPI(id)).data;
        setEmployee(thisEmployee)
    }

    /**
     * Populates the details page based on the id provided in the URI
     */
    useEffect(()=>{
        let employeeId = window.location?.pathname?.match(/\d+/)?.pop()
        //@ts-ignore
        getEmployee(employeeId)
    }, [])

    return (
        <>
            <div className="display-wrapper">
                <Card>
                    <div className="table-wrapper">

                        <Grid container>
                            <Grid item xs={12}>
                                <Card className="full-card">
                                    <div id="detail-form" className="detail-form">
                                        <FormControl>
                                            <InputLabel>Employee First Name:</InputLabel>
                                            {editing ?
                                                <Input id="firstName" defaultValue={employee?.firstName} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} /> :
                                                <Input id="firstName" value={employee?.firstName} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                        </FormControl>
                                        <br />
                                        <FormControl>
                                            <InputLabel> Employee Last Name:</InputLabel>
                                            {editing ?
                                                <Input id="lastName" defaultValue={employee?.lastName} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} /> :
                                                <Input id="lastName" value={employee?.lastName} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                        </FormControl>
                                        <br />
                                        <FormControl>
                                            <InputLabel> Employee Email:</InputLabel>
                                            {editing ?
                                                <Input id="email" defaultValue={employee?.email} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} /> :
                                                <Input id="email" value={employee?.email} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                        </FormControl>
                                        <br />
                                        <FormControl>
                                            <InputLabel>Employee Title:</InputLabel>
                                            {editing ?
                                                <Input id="title" defaultValue={employee?.title} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} /> :
                                                <Input id="title" value={employee?.title} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                        </FormControl>
                                        <br />
                                        <FormControl>
                                            <InputLabel>Employee Department</InputLabel>
                                            {editing ?
                                                <Input id="department" defaultValue={employee?.department} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} /> :
                                                <Input id="department" value={employee?.department} disabled={!editing} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />}
                                        </FormControl>
                                    </div>
                                    <br></br>
                                    {editing ?
                                        <>
                                            <div>
                                                <div className="edit-button" onClick={save}>Save</div>
                                                <div className="edit-button" onClick={cancel}>Cancel</div>
                                            </div>
                                        </>
                                        :
                                        
                                            <div>
                                                <div className="edit-button" onClick={enableEdit}>Edit</div>
                                            </div>
                                    
                                    }
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                {/*Card contains metadata for the building that is not editable (resourceCreator, resourceCreationDateTime, lastModifier, lastModifiedDateTime, resourceOwner) */}
                                <Card className="full-card">
                                    <span style={{ margin: 5 }}>
                                        <FormControl>
                                            <InputLabel >Resource Creator: </InputLabel>
                                            {/* <Input value={employee?.resourceMetaData.resourceCreator} disabled={true} inputProps={{ 'aria-label': 'description' }} /> */}
                                        </FormControl>
                                    </span>
                                    <span style={{ margin: 5 }}>
                                        <FormControl>
                                            <InputLabel>Time Created: </InputLabel>
                                            {/* <Input value={employee?.resourceMetaData.resourceCreationTime} disabled={true} inputProps={{ 'aria-label': 'description' }} /> */}
                                        </FormControl>
                                    </span>
                                    <span style={{ margin: 5 }}>
                                        <FormControl>
                                            <InputLabel>Last Modifier: </InputLabel>
                                            {/* <Input value={employee?.resourceMetaData.lastModifier} disabled={true} inputProps={{ 'aria-label': 'description' }} /> */}
                                        </FormControl>
                                    </span>
                                    <span style={{ margin: 5 }}>
                                        <FormControl>
                                            <InputLabel>Time Modified: </InputLabel>
                                            {/* <Input value={employee?.resourceMetaData.lastModifiedDateTime} disabled={true} inputProps={{ 'aria-label': 'description' }} /> */}
                                        </FormControl>
                                    </span>
                                    <span style={{ margin: 5 }}>
                                        <FormControl>
                                            <InputLabel>Resource Owner: </InputLabel>
                                            {/* <Input value={employee?.resourceMetaData.resourceOwner} disabled={true} inputProps={{ 'aria-label': 'description' }} /> */}
                                        </FormControl>
                                    </span>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>

                </Card>
            </div>
        </>
    )

}