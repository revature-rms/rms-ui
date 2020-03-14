import React from 'react';
import {combineReducers} from 'redux';
import { employeesReducer } from './employees-reducer';
import {roomReducer} from "./room-reducer"
import {roomsReducer} from "./rooms-reducer";
import { campusReducer } from './campus-reducer';
import { userState } from './login-reducer';


export interface IEmployeesState {
    employees: any,
    employeesMessage: string,
    id: number
}

export interface ICampusState {
    campuses: any,
    campus: any,
    campusMessage: string,
    id: number
}

export interface ILoginState {
    currentUser: any,
    loggedIn: boolean,
    loginMessage: string
}

export interface IState {
    employeesState: IEmployeesState,
    roomState:IRoomState,
    roomsState:IRoomsState,
    campusState: ICampusState,
    userState: ILoginState
}
export interface IRoomState {
    room:any
}
export interface IRoomsState {
    building:any,
}
export const state = combineReducers<IState>({

    employeesState: employeesReducer,
    roomState:roomReducer,
    roomsState:roomsReducer,
    campusState: campusReducer,
    userState: userState
})