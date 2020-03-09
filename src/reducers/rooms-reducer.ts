import {IRoomsState} from ".";
import {roomsTypes} from "../action-mappers/room-list-actions"

const initialState:IRoomsState={
    building:{},
}
export const roomsReducer=(state=initialState,action:any)=>{
    switch(action.type) {
        case roomsTypes.GET_ALL_ROOMS: {
            return {
                ...state,
                building:action.payload.bldg
            }
        }
        default: {
            return state;
        }
    }
}