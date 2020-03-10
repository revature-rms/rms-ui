import {campusServiceApi} from '../utils/APIs/campusServiceApis'

// function to get all campus from campus microservice. 
export const getAllcampusAPI = () => {
    return campusServiceApi.get("");
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