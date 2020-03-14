import { loginAPI } from "../utils/APIs/loginApi";

export const userLogin = () => {
    return loginAPI.get("");
}