/*Action to change the state of the employees to all of the known employees */
//Not sure if update method at the bottom is neccessary when useEffct/useState should run getAll again and display all of the new data.
import React from 'react';
import { getAllEmployeesAPI } from '../remote/employees';

export const employeesTypes = {
    SUCCESS_GETTING_EMPLOYEES: 'GETTING_EMPLOYEES_SUCCESSFUL',
    FAIL_GETTING_EMPLOYEES: 'GETTING_EMPLOYEES_FAILED',
    SUCCESS_GETTING_EMP_ID: 'GETTING_EMPLOYEE_ID_SUCCESSFUL'
}

 export const getAllEmployees = () => async (dispatch: any) => {
    // export const getAllEmployees = async () => {

    getAllEmployeesAPI().then(res =>{
        console.log("response found");
        if(res.status === 200){
            dispatch({
                type: employeesTypes.SUCCESS_GETTING_EMPLOYEES,
                payload: {
                    employees: res.data
                }
            })
        }else {
            dispatch({
                type: employeesTypes.FAIL_GETTING_EMPLOYEES,
                payload: {
                    employeesMessage: "Failed to get employees"
                }
            })
        }   
    }).catch(err =>{
        console.log(err);
        dispatch({
            type: employeesTypes.FAIL_GETTING_EMPLOYEES,
            payload: {
                employeesMessage: "Failed to get employees"
            }
        })
        })
}

export const updateId =  (id:number) => async (dispatch: any) => {
    dispatch({
        type: employeesTypes.SUCCESS_GETTING_EMP_ID,
        payload: {
            id: id
        }
    })
}