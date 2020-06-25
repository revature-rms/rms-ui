import { apiClient } from '.';

/**LEGACY REQUEST REFER TO SEARCH SERVICE*/
/**Function to get all campus from campus microservice.*/
export const getAllCampus = async () => {
    return await apiClient.get(`search/v1/campuses`);
}

/**LEGACY REQUEST REFER TO SEARCH SERVICE*/
/**Function to get campus by id*/
export const getCampusById = (id:number) => {
    return apiClient.get(`search/v1/campuses/${id}`);
}

/**Function to create an campus*/
export const createCampus = (data: any) => {
    return apiClient.post('campus/v2/campus', data);
}

/**Function to update an existing campus*/
export const updateCampus = (id:number, data: any) => {
    return apiClient.put(`campus/v2/campus/${id}`, data);
}

/**LEGACY REQUEST REFER TO SEARCH SERVICE*/
/**Function to get a campus by the trainer's ID*/
export const getCampusByTrainerId = (id:number) => {
    return apiClient.get(`campus/v2/campus/training/${id}`);
}

/**LEGACY REQUEST REFER TO SEARCH SERVICE*/
/**Function to get a campus by the Staging Manager's ID*/
export const getCampusByStagingId = (id:number) => {
    return apiClient.get(`campus/v2/campus/staging/${id}`);
}

/**LEGACY REQUEST REFER TO SEARCH SERVICE*/
/**Function to get a campus by the resource owner's ID */
export const getBuildingByOwnerId = (id:number) => {
    return apiClient.get(`campus/v2/campus/owner/${id}`);
}

/**Function to delete a campus by id*/
export const deleteCampusById = (id:number) => {
    return apiClient.delete(`campus/v2/campus/${id}`);
}
