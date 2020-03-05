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