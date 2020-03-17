import Axios from 'axios';

export const employeesServiceApi = 
    Axios.create({
        baseURL : "https://api.myjson.com/bins/16n1h6",
    })