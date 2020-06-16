import { apiClient } from '.';

// function to get all campus from campus microservice. 
export const getAllcampusAPI = async () => {
    return await apiClient.get(`campus/v2/campus`);
}


// function to get campus by id
export const getcampusByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/campus/${id}`);
}

// function to create an campus
export const createcampusAPI = (data: any) => {
    return apiClient.post('campus/v2/campus', data);
}

// function to update an existing campus
export const updatecampusAPI = (id:number, data: any) => {
    return apiClient.put(`campus/v2/campus/${id}`, data);
}