import Axios from 'axios';

export const campusServiceApi =
    Axios.create({
        baseURL: "https://api.myjson.com/bins/whtem",
        /* baseURL: "http://localhost:8080/search/v1/campuses" */
    })
   