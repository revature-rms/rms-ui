import { IHomeState } from "."
import { loginTypes } from "../action-mappers/login-action";
import { AppUser } from "../dtos/appUser";

// defining the initial state from the store
const initialState: IHomeState = {
    //@ts-ignore
    authUser: (null as AppUser)
}


//function to receive home action
export const homeReducer = (state = initialState, action: any) => {

    //switch statement to update the state based on action types (success or failed API call)
    switch (action.type) {
        case loginTypes.SUCCESSFULL_LOGIN: {
            return {
                ...state,
                authUser: action.payload.employees
            }
        }
        case loginTypes.FAILED_LOGIN: {
            return {
                ...state
            }
        }

        default:
            return state;
    }
} 