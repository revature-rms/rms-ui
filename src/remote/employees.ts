import React from 'react';
import {employeesServiceApi} from '../utils/APIs/employeesServiceApis';

// function to get all employees from employees microservice. 
export const getAllEmployeesAPI = () => {
    return employeesServiceApi.get("");
}


// function to get employee by id
export const getEmployeeByIdAPI = (id:number) => {
    employeesServiceApi.get(`employees/${id}`).then(res => {
        let employee = res.data;
        console.log(employee);
        return employee;
    })
}

// function to create an employee
export const createEmployeeAPI = (data: any) => {
    employeesServiceApi.post(`employees/${data}`).then(res => {
        let employee = res.data;
        console.log(employee);
        return employee;
    })
}

// function to update an existing employee
export const updateEmployeeAPI = (data: any) => {
    employeesServiceApi.put(`employees/${data}`).then(res => {
        let employee = res.data;
        console.log(employee);
        return employee;
    })
}