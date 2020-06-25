import { loginTypes } from "../action-mappers/login-action";
import { userReducer } from './login-reducer';

test('Should return default state', () => {
    const newState = userReducer(undefined, {});
    expect(newState).toEqual({
        currentUser: null,
        loggedIn: false,
        loginMessage: ''
    });
});

test('returns state of successful login', () => {
    const newState = userReducer(undefined, {
        type: loginTypes.SUCCESSFUL_LOGIN,
        payload: {
            currentUser: {},
            loggedIn: true,
            loginMessage: 'Login Successfull. Proceeding ....'
        }
    });
    expect(newState).toEqual({
        currentUser: undefined,
        loggedIn: true,
        loginMessage: 'Login Successfull. Proceeding ....'
    });
});


test('returns state of failed login', () => {
    const newState = userReducer(undefined, {
        type: loginTypes.BAD_REQUEST,
        payload: {
            loginMessage: 'Login Failed'
        }
    });
    expect(newState).toEqual({
        currentUser:null,
        loggedIn:false,
        loginMessage: 'Login Failed'
    });
});
