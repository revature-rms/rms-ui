import axios from "axios";

export const roomList = async() => {
    try {
        let response=await(axios.get("https://api.myjson.com/bins/suof2"))
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            return: null
        }
    }
}