import axios from 'axios';

//gathers all the data for global search functionality
export const allData= async () => {
    let appData = ""
    try {
        const response = await axios.get('https://api.myjson.com/bins/19j3dy')
        if (response.status === 200) {
            appData = response.data;
            return appData
        }
        else {
            return appData;
        }
    } catch (e) {
        console.log(e);
    }
} 