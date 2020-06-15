import {campusServiceApi} from '../utils/APIs/campusServiceApis'

// function to get all campus from campus microservice. 
export const getAllCampusAPI = async () => {
    return await campusServiceApi.get("https://dd4c2be1-ba13-4fc5-8018-354abe9979ea.mock.pstmn.io/campus");
}
// function to get campus by id
export const getcampusByIdAPI = (id:number) => {
    return campusServiceApi.get(`campus/${id}`);
}

// function to create an campus
export const createcampusAPI = (data: any) => {
    return campusServiceApi.post('campus', data);
}

// function to update an existing campus
export const updatecampusAPI = (id:number, data: any) => {
    return campusServiceApi.put(`campus/${id}`, data);
}