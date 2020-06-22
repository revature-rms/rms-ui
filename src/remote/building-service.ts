import { apiClient } from '.';

/**Function to get building by id*/
export const getBuildingByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/building/${id}`);
}

/**Function to get all buildings*/
export const getAllBuildingsAPI = () => {
    return apiClient.get(`campus/v2/building`);
}

/**Function to get building by owner id */
export const getBuildingByOwnerId = (id:number) => {
    return apiClient.get(`search/v1/building/owner/${id}`);
}
