/**Action to change the state of the current logged in user*/
import { userLogin } from "../remote/login";
import { AppUser } from "../dtos/appUser";

export const loginTypes = {
    SUCCESSFULL_LOGIN: 'SUCCESSFULLY_LOGGED_IN',
    FAILED_LOGIN: 'FAILED_TO_LOGIN'
}

export const login = (username:string, password:string) => (dispatch:any) => {
    console.log("login")
    let currentUser = new AppUser(1, "test", "password", 1, "Trainer");
    console.log(currentUser)
    dispatch({
        type: loginTypes.SUCCESSFULL_LOGIN,
        payload: {
            currentUser: currentUser
        }
    })
    let allUsers;
    userLogin().then((users:any) => {
        
        //allUsers = users.data;
        //let currentUser;
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
    //     }
    //     );
    // }).catch((e:any) => {
    //     console.log(e);
    //     dispatch({
    //         type: loginTypes.FAILED_LOGIN,
    //         payload: {
    //             loginMessage: 'Sorry, failed to retrieve data. Try again later'
    //         }
    //     })
        
    }
    )
}