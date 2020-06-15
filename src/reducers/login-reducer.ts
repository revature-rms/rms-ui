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
        case loginTypes.SUCCESSFULL_LOGIN:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                loggedIn: true,
                loginMessage: 'Login Successfull. Proceeding ....'
            }

        case loginTypes.FAILED_LOGIN:
            return {
                ...state,
                loginMessage: action.payload.loginMessage
            }

        default:
            return state

    }
}