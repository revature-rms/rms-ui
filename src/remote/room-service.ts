import { apiClient } from '.';

/**Function to get room by id*/
export const getRoomByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/room/${id}`);
}
/**Function to get rooms by owner id */
export const getRoomByOwnerId = (id:number) => {
    return apiClient.get(`search/v1/room/owner/${id}`);
}