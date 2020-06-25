import { apiClient } from ".";

export async function userLogin(username: string, password: string) {
    let response = await apiClient.post('/auth/', { username, password });
    return await response.data;
}