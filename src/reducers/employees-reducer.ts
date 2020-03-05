import { IEmployeesState } from "."
import { employeesTypes } from "../action-mappers/employees-action";

// defining the initial state from the store
const initialState: IEmployeesState = {
    employees: null,
    employeesMessage: ''
}


//function to receive employees action
export const employeesReducer = (state = initialState, action: any) => {

    //switch statement to update the state based on action types (success or failed API call)
    switch (action.type) {
        case employeesTypes.SUCCESS_GETTING_EMPLOYEES: {
            return {
                ...state,
                employees: action.payload.employees,
                employeesMessage: 'Success getting employees'
            }
        }
        case employeesTypes.FAIL_GETTING_EMPLOYEES: {
            return {
                ...state,
                employeesMessage: action.payload.employeesMessage
            }
        }

        default:
            return state;
    }
}