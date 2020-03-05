import React from 'react';
import {combineReducers} from 'redux';
import { employeesReducer } from './employees-reducer';
import {roomReducer} from "./room-reducer"


export interface IEmployeesState {
    employees: any,
    getEmployeesMessage: string
}

export interface IState {
    employeesState: IEmployeesState,
    roomState:IRoomState
}
export interface IRoomState {
    room:any
}
export const state = combineReducers<IState>({

    employeesState: employeesReducer,
    roomState:roomReducer
})