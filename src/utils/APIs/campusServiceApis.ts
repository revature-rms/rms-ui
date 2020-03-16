import Axios from 'axios';

export const campusServiceApi =
    Axios.create({
        baseURL: "localhost:10000/search/campuses",
    })
   