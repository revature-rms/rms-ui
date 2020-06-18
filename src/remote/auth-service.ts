import { apiClient } from ".";

// Endpoint not implemented, will need to supply gateway path.

export const userLogout = () => {
    return apiClient.get("");
}

export async function userLogin(username: string, password: string) {
    let response = await apiClient.post('/auth', { username, password });
    return await response.data;
}