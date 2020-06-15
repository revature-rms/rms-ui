import axios from "axios";

export const roomList = async() => {
    try {
        let response=await(axios.get("https://dd4c2be1-ba13-4fc5-8018-354abe9979ea.mock.pstmn.io/campus/rooms"))
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            return: null
        }
    }
}