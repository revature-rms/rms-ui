/**Action to change the state of campuses to all of the known campuses*/
//Going to need a method to get only specific campuses when neccessary
//Not sure if update method at the bottom is neccessary when useEffct/useState should run getAll again and display all of the new data.
import { getAllcampusAPI } from '../remote/campus-service';

export const campusTypes = {
    SUCCESS_GETTING_CAMPUS: 'GETTING_CAMPUS_SUCCESSFUL',
    FAIL_GETTING_CAMPUS: 'GETTING_CAMPUS_FAILED',
    SUCCESS_GETTING_CAMPUS_ID: 'GETTING_CAMPUS_ID_SUCCESSFUL'
}

 export const getAllCampuses = () => async (dispatch: any) => {

    getAllcampusAPI().then(res =>{
        console.log("response found");
        if(res.status === 200){
            dispatch({
                type: campusTypes.SUCCESS_GETTING_CAMPUS,
                payload: {
                    campus: res.data
                }
            })
        } else {
            dispatch({
                type: campusTypes.FAIL_GETTING_CAMPUS,
                payload: {
                    campusMessage: "Failed to get campus"
                }
            })
        }   
    }).catch(err =>{
        console.log(err);
        dispatch({
            type: campusTypes.FAIL_GETTING_CAMPUS,
            payload: {
                campusMessage: "Failed to get campus"
            }
        })
        })
}

// updating campus reducers with campus id selected. 
export const updateId =  (id:number) => async (dispatch: any) => {
    dispatch({
        type: campusTypes.SUCCESS_GETTING_CAMPUS_ID,
        payload: {
            id: id
        }
    })
}