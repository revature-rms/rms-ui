import { apiClient } from '.';

/**Function to get all campus from campus microservice.*/
export const getAllCampus = async () => {
    return await apiClient.get(`campus/v2/campus`);
}

/**Function to get campus by id*/
export const getCampusById = (id:number) => {
    return apiClient.get(`campus/v2/campus/${id}`);
}

/**Function to create an campus*/
export const createCampus = (data: any) => {
    return apiClient.post('campus/v2/campus', data);
}

/**Function to update an existing campus*/
export const updateCampus = (id:number, data: any) => {
    return apiClient.put(`campus/v2/campus/${id}`, data);
}

export const getBuildingById = async (id: number) => {
    return await apiClient.get(`campus/v2/building/${id}`)
}

/**Function to get campus by owner id */
export const getCampusByOwnerId = (id:number) => {
    return apiClient.get(`search/v1/campus/owner/${id}`);
}