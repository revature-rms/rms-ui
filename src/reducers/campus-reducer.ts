import { ICampusState } from ".";
import {campusTypes} from "../action-mappers/campus-action"



const initialState: ICampusState = {
    campuses: null,
    campus: null,
    campusMessage: '',
    id: 0
}


export const campusReducer = (state = initialState, action: any)=>{

    switch (action.type) {
        case campusTypes.SUCCESS_GETTING_CAMPUS: {
            return {
                ...state,
                campuses: action.payload.campus,
                employeesMessage: 'Success getting campuses'
            }
        }
        case campusTypes.FAIL_GETTING_CAMPUS: {
            return {
                ...state,
                campusMessage: action.payload.campusMessage
            }
        }
        case campusTypes.SUCCESS_GETTING_CAMPUS_ID: {
            return {
                ...state,
                id: action.payload.id
            }
        }

        default:
            return state;
    }

}