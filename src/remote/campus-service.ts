import { apiClient } from '.';

/**Function to get all campus from campus microservice.*/
export const getAllcampusAPI = async () => {
    return await apiClient.get(`campus/v2/campus`);
}

/**Function to get campus by id*/
export const getcampusByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/campus/${id}`);
}

/**Function to create an campus*/
export const createcampusAPI = (data: any) => {
    return apiClient.post('campus/v2/campus', data);
}

/**Function to update an existing campus*/
export const updatecampusAPI = (id:number, data: any) => {
    return apiClient.put(`campus/v2/campus/${id}`, data);
}