import React from 'react';
import { combineReducers } from 'redux';
import { employeesReducer } from './employees-reducer';
import { roomReducer } from "./room-reducer"
import { roomsReducer } from "./rooms-reducer";
import { campusReducer } from './campus-reducer';
import { userReducer } from './login-reducer';
//import { homeReducer } from './home-reducer.ts.txt';
import { AppUser } from '../dtos/appUser';
import { Building } from '../dtos/building';
import { buildingReducer } from './building-list-reducer';


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

export interface IBuildingState {
    thisBuilding: Building
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
    employeesState: IEmployeesState,
    roomState:IRoomState,
    roomsState:IRoomsState,
    campusState: ICampusState,
    userState: ILoginState,
    homeState: IHomeState,
    thisBuildingState: IBuildingState
}

export interface IRoomState {
    room:any
}

export interface IRoomsState {
    building:any,
}

export const state = combineReducers<IState>({
    employeesState: employeesReducer,
    roomState: roomReducer,
    roomsState: roomsReducer,
    campusState: campusReducer,
    userState: userReducer,
    homeState: userReducer,
    thisBuildingState: buildingReducer 
})