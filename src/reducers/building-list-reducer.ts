import { IBuildingState } from ".";
import { buildingTypes } from "../action-mappers/building-action";
import { Building } from "../dtos/building";

const initialState: IBuildingState = {
    // @ts-ignore
    thisBuilding: null as Building
}

export const buildingReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case buildingTypes.SUCCESS_SETTING_THIS_BUILDING:
            return {
                ...state,
                thisBuilding: action.payload
            }

        case buildingTypes.FAIL_SETTING_THIS_BUILDING:
            return {
                ...state,
                //@ts-ignore
                thisBuilding: null as Building
            }

        default:
            return state

    }
}