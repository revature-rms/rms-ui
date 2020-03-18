import Axios from 'axios';

// base Url for data related to all employees
export const employeesServiceApi = 
    Axios.create({
        baseURL : "https://api.myjson.com/bins/ekvqi",
    })