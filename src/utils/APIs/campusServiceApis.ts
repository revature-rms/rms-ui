import Axios from 'axios';

export const campusServiceApi =
    Axios.create({
        baseURL: "https://api.myjson.com/bins/95j3i",
        /* baseURL: "https://api.myjson.com/bins/95j3i" */
    })
   