/**All of the functions from the search-service microservice
 * these are used to grab data from any of the other microservices
 * and provide additional information such as the Metadata
*/
import { apiClient } from '.';

/**Returns a list of all campuses including all nested objects*/
export const findAllCampuses = (id:number) => {
    return apiClient.get(`search/v1/campuses`);
}

/**Returns a list of all campuses including all nested objects by the respective training manager ID*/
export const findAllCampusesByTrainingManagerId = (id:number) => {
    return apiClient.get(`search/v1/campus/training/${id}`);
}

/**Returns a campus by id including all nested object*/
export const findCampusById = (id:number) => {
    return apiClient.get(`search/v1/campus/${id}`);
}

/**Returns a list of campuses owned by a specified app user*/
export const findAllCampusesByOwner = (id:number) => {
    return apiClient.get(`search/v1/campus/owner/${id}`);
}

/**Returns a building by id including all nested objects*/
export const findBuildingById = (id:number) => {
    return apiClient.get(`search/v1/building/${id}`);
}
