import Axios from 'axios';

export const campusServiceApi =
    Axios.create({
        baseURL: "https://api.myjson.com/bins/191io6",
    })