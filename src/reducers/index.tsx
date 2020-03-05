import React from 'react';
import {combineReducers} from 'redux';
import {roomReducer} from "./room-reducer"

export interface IRoomState {
    room:any
}

export interface IState {
    roomState:IRoomState
}

export const state = combineReducers<IState>({
    roomState:roomReducer
})