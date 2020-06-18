import { ILoginState } from ".";
import { loginTypes } from "../action-mappers/login-action";
import { AppUser } from "../dtos/appUser";



const initialState: ILoginState = {
    // @ts-ignore
    currentUser: null as AppUser,
    loggedIn: false,
    loginMessage: ''

}

export const userReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case loginTypes.SUCCESSFUL_LOGIN:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                loggedIn: true,
                loginMessage: 'Login Successfull. Proceeding ....'
            }
        
        case loginTypes.SUCCESSFUL_LOGOUT:
            return {
                ...state,
                authUser: action.payload
            } 

        case loginTypes.INVALID_CREDENTIALS:
        case loginTypes.BAD_REQUEST:
        case loginTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                loginMessage: action.payload.loginMessage
            }

        default:
            return state;

    }
}