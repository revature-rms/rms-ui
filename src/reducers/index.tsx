import React from 'react';
import {combineReducers} from 'redux';
import { employeesReducer } from './employees-reducer';
import {roomReducer} from "./room-reducer"
import {roomsReducer} from "./rooms-reducer";


export interface IEmployeesState {
    employees: any,
    employeesMessage: string
}

export interface IState {
    employeesState: IEmployeesState,
    roomState:IRoomState,
    roomsState:IRoomsState
}
export interface IRoomState {
    room:any
}
export interface IRoomsState {
    bldg:any,
    rooms: any
}
export const state = combineReducers<IState>({

    employeesState: employeesReducer,
    roomState:roomReducer,
    roomsState:roomsReducer
})