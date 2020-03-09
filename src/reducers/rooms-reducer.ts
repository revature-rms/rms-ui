import {IRoomsState} from ".";

const initialState:IRoomsState={
    bldg:{},
    rooms: {}
}
export const roomsReducer=(state=initialState,action:any)=>{
    switch(action.type) {
        default: {
            return state;
        }
    }
}