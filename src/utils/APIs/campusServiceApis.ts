import Axios from 'axios';

export const campusServiceApi =
    Axios.create({
        baseURL: "https://dd4c2be1-ba13-4fc5-8018-354abe9979ea.mock.pstmn.io/campus",
        /* baseURL: "http://localhost:8080/search/v1/campuses" */
    })
   