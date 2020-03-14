import { ILoginState } from ".";
import { loginTypes } from "../action-mappers/login-action";



const initialState: ILoginState = {
    currentUser: null,
    loggedIn: false,
    loginMessage: ''

}

export const userState = (state= initialState, action:any) =>{

    switch(action.type){
        case loginTypes.SUCCESSFULL_LOGIN: 
        return {
            ...state,
            currentUser: action.payload.user,
            loggedIn: true,
            loginMessage: 'Login Successfull. Proceeding ....'
        }

        case loginTypes.FAILED_LOGIN:
            return {
                ...state,
                loginMessage: action.payload.loginMessage
            }
    }
}