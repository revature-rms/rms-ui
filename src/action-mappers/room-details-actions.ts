import {testRoom} from "../remote/room-details-search";
export const roomTestTypes={
    DEFAULT_ROOM_TEST: "ROOM_DEFAULT_ROOM_TEST"
}
export const getTestRoom=()=>async(dispatch:any)=>{
    let room=(await testRoom())
    dispatch({
        type:roomTestTypes.DEFAULT_ROOM_TEST,
        payload:{
            room:room
        }
    })
}