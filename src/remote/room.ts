import { roomServiceApi } from '../utils/APIs/roomServiceApi'

// function to get all campus from campus microservice. 
export const getAllcampusAPI = async () => {
    return await roomServiceApi.get("");
}