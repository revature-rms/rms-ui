import React from 'react';
import Axios from 'axios';

export const employeesServiceApi = 
    Axios.create({
        baseURL : "https://api.myjson.com/bins/19vpmq/",
    })