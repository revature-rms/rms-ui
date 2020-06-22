/**Action to change the state of the current logged in user*/
import { userLogin } from "../remote/auth-service";
import { AppUser } from "../dtos/appUser";

export const logoutTypes = {
    SUCCESSFUL_LOGOUT: 'TRAVEL_APP_SUCCESSFUL_LOGOUT',
}

export const loutout = (username: string, password: string) => async (dispatch: any) => {
        dispatch({
            type: logoutTypes.SUCCESSFUL_LOGOUT,
            payload: {
                currentUser: null,
                loginMessage: ""
            }
        });
}