import { apiClient } from '.';

/**Function to get building by id*/
export const getBuildingByIdAPI = (id:number) => {
    return apiClient.get(`building/v2/building/${id}`);
}
