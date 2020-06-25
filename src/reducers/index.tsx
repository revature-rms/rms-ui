import React from 'react';
import { combineReducers } from 'redux';
import { userReducer } from './login-reducer';
import { AppUser } from '../dtos/appUser';


export interface IEmployeesState {
}

export interface ICampusState {
}

export interface IBuildingState {
}

export interface IHomeState {
    currentUser: AppUser,
    loggedIn: boolean,
    loginMessage: string
}

export interface ILoginState {
    currentUser: AppUser,
    loggedIn: boolean,
    loginMessage: string
}
export interface ILogoutState {
    currentUser: AppUser,
    loggedIn: boolean,
    loginMessage: string
}
export interface IState {
    userState: ILoginState,
    homeState: IHomeState
}

export interface IRoomState {

}

export const state = combineReducers<IState>({
    userState: userReducer,
    homeState: userReducer

})