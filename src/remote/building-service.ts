import { apiClient } from '.';

/**Function to get building by id*/
export const getBuildingByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/building/${id}`);
}

/**Function to get all buildings from campus microservice.*/
export const getAllBuildings = async () => {
    return await apiClient.get(`campus/v2/building`);
}

/**Function to get a building by the trainer's' ID*/
export const getBuildingByTrainerId = (id:number) => {
    return apiClient.get(`campus/v2/building/training/${id}`);
}

/**Function to create a building*/
export const createBuilding = (data: any) => {
    return apiClient.post('campus/v2/building', data);
}

/**Function to update an existing campus*/
export const updateBuilding = (id:number, data: any) => {
    return apiClient.put(`campus/v2/building/${id}`, data);
}

/**Function to get a building by the resource owner's ID */
export const getBuildingByOwnerId = (id:number) => {
    return apiClient.get(`campus/v2/building/owner/${id}`);
}

/**Function to delete a building by the building's ID */
export const deleteBuildingByBuildingId = (id:number) => {
    return apiClient.delete(`campus/v2/building/${id}`);
}