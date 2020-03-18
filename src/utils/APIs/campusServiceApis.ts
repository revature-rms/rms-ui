import Axios from 'axios';

export const campusServiceApi =
    Axios.create({
        baseURL: "https://api.myjson.com/bins/95j3i",
        /* baseURL: "http://localhost:8080/search/v1/campuses" */
    })
   