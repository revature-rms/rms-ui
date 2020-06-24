/**All of the functions from the search-service microservice
 * these are used to grab data from any of the other microservices
 * and provide additional information such as the Metadata
*/
import { apiClient } from '.';

/**Returns a list of all campuses including all nested objects*/
export const findAllCampuses = () => {
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

/**Returns a list of all buildings*/
export const findAllBuilding = () => {
    return apiClient.get(`search/v1/building`);
}

/**Returns a building by id including all nested objects*/
export const findBuildingById = (id:number) => {
    return apiClient.get(`search/v1/building/${id}`);
}

/**Returns a building by the Training Lead/Building Manager ID, including all nested objects*/
export const findBuildingByTrainingLeadId = (id:number) => {
    return apiClient.get(`search/v1/building/training/${id}`);
}

/**Returns a list of buildings base on an app user id*/
export const findBuildingByOwner = (id:number) => {
    return apiClient.get(`search/v1/building/owner/${id}`);
}

/**Returns a list of all RoomDto objects*/
export const findAllRooms = () => {
    return apiClient.get(`search/v1/room`);
}

/**Returns a room by id including all nested objects*/
export const findRoomById = (id:number) => {
    return apiClient.get(`search/v1/room/${id}`);
}

/**Returns a room by Trainer id including all nested objects*/
export const findRoomByTrainerId = (id:number) => {
    return apiClient.get(`search/v1/room/trainer/${id}`);
}

/**Returns a list of rooms base on an app user id*/
export const findAllRoomByOwner = (id:number) => {
    return apiClient.get(`search/v1/room/owner/${id}`);
}

/**Returns a list of all employees including all nested objects*/
export const findAllEmployees = () => {
    return apiClient.get(`search/v1/employees`);
}

/**Returns an employee by id including all nested objects*/
export const findEmployeeById = (id:number) => {
    return apiClient.get(`search/v1/employee/${id}`);
}

/**Returns a list of Employees resources owned by a provided app user*/
export const findAllEmployeeByOwner = (id:number) => {
    return apiClient.get(`search/v1/employee/owner/${id}`);
}

/**Returns a batch by id including all nested obljects*/
export const findBatchById = (id:number) => {
    return apiClient.get(`search/v1/batch/${id}}`);
}

