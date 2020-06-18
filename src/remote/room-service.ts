import { apiClient } from '.';

/**Function to get room by id*/
export const getRoomByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/room/${id}`);
}