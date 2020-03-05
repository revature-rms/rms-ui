import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://api.myjson.com/bins/lh38a'
})