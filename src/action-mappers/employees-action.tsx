import React from 'react';
import { getAllEmployeesAPI } from '../remote/employees';

export const employeesTypes = {
    SUCCESS_GETTING_EMPLOYEES: 'GETTING_EMPLOYEES_SUCCESSFUL',
    FAIL_GETTING_EMPLOYEES: 'GETTING_EMPLOYEES_FAILED'
}

 export const getAllEmployees = () => async (dispatch: any) => {
    // export const getAllEmployees = async () => {

    getAllEmployeesAPI().then(res =>{
        console.log("response found");
        
        dispatch({
            types: employeesTypes.SUCCESS_GETTING_EMPLOYEES,
            payload: {
                employees: res
            }
        })
    }).catch(err =>{
        console.log(err);
        dispatch({
            types: employeesTypes.SUCCESS_GETTING_EMPLOYEES,
            payload: {
                getEmployeesMessage: "Failed to get employees"
            }
        })
        
    })
}