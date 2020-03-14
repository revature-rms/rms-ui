import Axios from "axios";

export const loginAPI = 
    Axios.create({
        baseURL : "https://api.myjson.com/bins/oz4ni",
    })