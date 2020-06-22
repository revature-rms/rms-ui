import React from 'react';
import { combineReducers } from 'redux';
import { employeesReducer } from './employees-reducer';
import { userReducer } from './login-reducer';
//import { homeReducer } from './home-reducer.ts.txt';
import { AppUser } from '../dtos/appUser';


export interface IEmployeesState {
    employees: any,
    employeesMessage: string,
    id: number
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

export interface IState {
    employeesState: IEmployeesState,
    userState: ILoginState,
    homeState: IHomeState
}

export interface IRoomState {

}

export const state = combineReducers<IState>({
    employeesState: employeesReducer,
    userState: userReducer,
    homeState: userReducer

})