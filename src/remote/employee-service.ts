import { apiClient } from ".";

// Double check these endpoints!

/**Function to get all employees from employees microservice.*/
export const getAllEmployees = () => {
    return apiClient.get("/search/v1/employees");
}

/**Function to get employee by id*/
export const getEmployeeByIdAPI = (id:number) => {
    return apiClient.get(`/search/v1/employee/${id}`);
}

export const getAllEmployeeById = (id: number) =>{
    return apiClient.get(`/search/v1/employee/owner/${id}`)
}

/**Function to create an employee*/
export const createEmployee = (data: any) => {
    return apiClient.post('/employee/employee/employees', data);
}

/**Function to update an existing employee*/
export const updateEmployee = (id:number, data: any) => {
    return apiClient.put(`/employee/employee/employees/${id}`, data);
}

