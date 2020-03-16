import Axios from 'axios';

export const campusServiceApi =
    Axios.create({
        baseURL: "http://localhost:10000/search/campuses",
        /* baseURL: "https://api.myjson.com/bins/95j3i" */
    })
   