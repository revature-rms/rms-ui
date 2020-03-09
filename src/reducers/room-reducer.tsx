import {IRoomState} from ".";
import {roomTestTypes} from "../action-mappers/room-details-actions";

const initialState:IRoomState={
    room:{}
}
export const roomReducer=(state=initialState,action:any)=>{
    switch(action.type) {
        case roomTestTypes.DEFAULT_ROOM_TEST: {
            return {
                ...state,
                room:action.payload.room
            }
        }
        default: {
            return state;
        }
    }
}