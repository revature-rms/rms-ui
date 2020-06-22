import { apiClient } from '.';
import axios from 'axios';

/**Function to get room by id*/
export const getRoomByIdAPI = (id:number) => {
    return apiClient.get(`campus/v2/room/${id}`);
}

/**Function to get all rooms from campus microservice.*/
export const getAllRooms = async () => {
    return await apiClient.get(`campus/v2/room`);
}

/**Function to create a room*/
export const createRoom = (data: any) => {
    return apiClient.post('campus/v2/room', data);
}

/**Function to update an existing room*/
export const updateRoom = (data: any) => {
    return apiClient.put(`campus/v2/room`, data);
}

/**Function to get a room by the resource owner's ID */
export const getRoomByOwnerId = (id:number) => {
    return apiClient.get(`campus/v2/room/owner/${id}`);
}

/**Function to delete a building by the building's ID */
export const deleteRoomByRoomId = (id:number) => {
    return apiClient.delete(`campus/v2/room/${id}`);
}