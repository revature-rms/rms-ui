import Axios from 'axios';

export const employeesServiceApi = 
    Axios.create({
        baseURL : "https://api.myjson.com/bins/15fm7e",
    })