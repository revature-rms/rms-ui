import { apiClient } from ".";
import axios from "axios";

export const testRoom = async () => {
    try {
        let response = await (axios.get("https://api.myjson.com/bins/1bfd9a"))
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            return: null
        }
    }
}