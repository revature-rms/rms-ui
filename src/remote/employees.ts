import {employeesServiceApi} from '../utils/APIs/employeesServiceApis';

// function to get all employees from employees microservice. 
export const getAllEmployeesAPI = () => {
    return employeesServiceApi.get("");
}


// function to get employee by id
export const getEmployeeByIdAPI = (id:number) => {
    return employeesServiceApi.get(`employees/${id}`);
}

// function to create an employee
export const createEmployeeAPI = (data: any) => {
    return employeesServiceApi.post('employees', data);
}

// function to update an existing employee
export const updateEmployeeAPI = (id:number, data: any) => {
    return employeesServiceApi.put(`employees/${id}`, data);
}
