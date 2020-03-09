import {IRoomsState} from ".";

const initialState:IRoomsState={
    bldg:{},
}
export const roomsReducer=(state=initialState,action:any)=>{
    switch(action.type) {
        default: {
            return state;
        }
    }
}