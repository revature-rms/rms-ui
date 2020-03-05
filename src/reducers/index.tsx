import React from 'react';
import {combineReducers} from 'redux';
import { employeesReducer } from './employees-reducer';


export interface IEmployeesState {
    employees: any,
    getEmployeesMessage: string
}

export interface IState {
    employeesState: IEmployeesState
}

export const state = combineReducers<IState>({

    employeesState: employeesReducer
})