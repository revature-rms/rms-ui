/*Action to change state of rooms to all known rooms*/
import {roomList} from "../remote/room-list-search"
export const roomsTypes={
    GET_ALL_ROOMS:"ROOMS_GET_ALL_ROOMS"
}
export const getAllRooms=()=>async(dispatch:any)=>{
    let bldg=(await roomList())
    dispatch({
        type:roomsTypes.GET_ALL_ROOMS,
        payload:{
            building:bldg
        }
    })
}