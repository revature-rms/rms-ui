import { IEmployeesState } from "."
import { employeesTypes } from "../action-mappers/employees-action";

// first, we define the initial state of this piece of the store
const initialState:IEmployeesState = {
    employees:null,
    getEmployeesMessage:''
}


//we have a function that recieves actions, and returns the new state after that action
export const employeesReducer = (state = initialState, action:any) => {
    //all of the different ways for the reducer to update state
    //based on the type of the action it recieves
    switch (action.type) {
        case employeesTypes.SUCCESS_GETTING_EMPLOYEES:{
            return {//we always return the new state, which means, spread the old state
                ...state,
                employees:action.payload.employees,
                getEmployeesMessage: 'You success getting employees'
            }
        }
        case employeesTypes.FAIL_GETTING_EMPLOYEES: {
            return {
                ...state,
                getEmployeesMessage:action.payload.getEmployeesMessage
            }
        } 
    
        default:
            return state;
    }
}