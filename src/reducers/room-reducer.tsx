import {IRoomState} from ".";

const initialState:IRoomState={
    room:{}
}
export const roomReducer=(state=initialState,action:any)=>{
    switch(action.type) {
        default: {
            return state;
        }
    }
}