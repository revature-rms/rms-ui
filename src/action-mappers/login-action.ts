/**Action to change the state of the current logged in user*/
import { userLogin } from "../remote/auth-service";
import { AppUser } from "../dtos/appUser";

export const loginTypes = {
    SUCCESSFUL_LOGIN: 'TRAVEL_APP_SUCCESSFUL_LOGIN',
    BAD_REQUEST: 'TRAVEL_APP_BAD_REQUEST',
    INVALID_CREDENTIALS: 'TRAVEL_APP_INVALID_CREDENTIALS',
    INTERNAL_SERVER_ERROR: 'TRAVEL_APP_INTERNAL_SERVER_ERROR',
    SUCCESSFUL_LOGOUT: 'TRAVEL_APP_SUCCEFUL_LOGOUT'
}

export const login = (username:string, password:string) => async (dispatch:any) => {
    let currentUser = new AppUser(1, "test", "password", 1, ["1"]);
    // allUsers.forEach((user:any) => {
    //     if(user.username === username && user.password === password){
    //         currentUser = user;
    //         console.log(currentUser);
            
            dispatch({
                type: loginTypes.SUCCESSFUL_LOGIN,
                payload: {
                    currentUser: currentUser
                }
            })
    // try {
        
    //     let authUser = await userLogin(username, password);
    //     console.log(authUser);
    //     dispatch({
    //         type: loginTypes.SUCCESSFUL_LOGIN,
    //         payload: authUser
    //     });

    // } catch (e) {

    //     let status = e.response?.status;
    //     if (status === 400) {
    //         dispatch({
    //             type: loginTypes.BAD_REQUEST,
    //             payload: e.response?.data.message
    //         });
    //     } else if (status === 401) {
    //         dispatch({
    //             type: loginTypes.INVALID_CREDENTIALS,
    //             payload: e.response?.data.message
    //         });
    //     } else {
    //         dispatch({
    //             type: loginTypes.INTERNAL_SERVER_ERROR,
    //             payload: e.response?.data.message || 'Error: Server could not be reached'
    //         });
    //     }
    // }
    
    // let allUsers;
    // userLogin(username, password).then((users:any) => {
        
    //     allUsers = users.data;
    //     let currentUser;
    //     // let currentUser = new AppUser(1, "test", "password", 1, "Trainer");
    //     allUsers.forEach((user:any) => {
    //         if(user.username === username && user.password === password){
    //             currentUser = user;
    //             console.log(currentUser);
                
    //             dispatch({
    //                 type: loginTypes.SUCCESSFULL_LOGIN,
    //                 payload: {
    //                     currentUser: currentUser
    //                 }
    //             })
    //         } else {
    //             dispatch ({
    //                 type: loginTypes.FAILED_LOGIN,
    //                 payload: {
    //                     loginMessage: 'Username or password mismatch. Try again!'
    //                 }
    //             })
    //         }
    //     });
    // }).catch((e:any) => {
    //     console.log(e);
    //     dispatch({
    //         type: loginTypes.FAILED_LOGIN,
    //         payload: {
    //             loginMessage: 'Sorry, failed to retrieve data. Try again later'
    //         }
    //     })
        
    // })
}