import {getAllCampus} from '../remote/campus-service'
import { Building } from '../dtos/building'

export const buildingTypes = {
    SUCCESS_SETTING_THIS_BUILDING: 'SETTING_THIS_BUILDING_SUCCESSFUL',
    FAIL_SETTING_THIS_BUILDING: 'SETTING_THIS_BUILDING_UNSUCCESSFUL',
}

export const setThisBuilding = (thisBuilding: Building) => async (dispatch: any) => {

    try{
        dispatch({
            type: buildingTypes.SUCCESS_SETTING_THIS_BUILDING,
            payload: thisBuilding
        });
    } catch(e) {
        dispatch({
            type: buildingTypes.FAIL_SETTING_THIS_BUILDING,
            payload: e.response.data.message
        });
    }
}
