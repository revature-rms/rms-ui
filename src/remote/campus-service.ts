import { apiClient } from '.';

/**Function to get all campus from campus microservice.*/
export const getAllCampusAPI = async () => {
    return await apiClient.get(`campus/v2/campus`);
}

/**Function to get campus by id*/
export const getCampusByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/campus/${id}`);
}

/**Function to create an campus*/
export const createCampusAPI = (data: any) => {
    return apiClient.post('campus/v2/campus', data);
}

/**Function to update an existing campus*/
export const updateCampusAPI = (id:number, data: any) => {
    return apiClient.put(`campus/v2/campus/${id}`, data);
}