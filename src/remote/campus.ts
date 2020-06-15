import {campusServiceApi} from '../utils/APIs/campusServiceApis'

// function to get all campus from campus microservice. 
<<<<<<< HEAD
export async function getAllCampusAPI(){
    let response = await campusServiceApi.get("");
    return response.data;
=======
export const getAllcampusAPI = async () => {
    return await campusServiceApi.get("");
>>>>>>> 006b2871ea436d47ef7df0dc8150f8cfbf1ece7e
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