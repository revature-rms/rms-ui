import axios from 'axios';


export const allData= async () => {
    let appData = ""
    try {
        const response = await axios.get('https://api.myjson.com/bins/12ssxm')
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