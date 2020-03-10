import axios from 'axios';


export const getCampuses = async () => {
    let buildingData = ""
    try {
        const response = await axios.get('https://api.myjson.com/bins/f3udi')
        if (response.status === 200) {
            buildingData = response.data;
            return buildingData
        }
        else {
            return buildingData;
        }
    } catch (e) {
        console.log(e);
    }
} 