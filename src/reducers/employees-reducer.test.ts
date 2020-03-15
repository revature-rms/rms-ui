import { employeesTypes } from "../action-mappers/employees-action"
import { employeesReducer } from './employees-reducer';

test('Should return default state of employee', () => {
    const newState = employeesReducer(undefined, {});
    expect(newState).toEqual({
        "employees": null, 
        "employeesMessage": "", 
        "id": 0
    });
});

test('returns state of successful employee fetch', () => {
    const newState = employeesReducer(undefined, {
        type: employeesTypes.SUCCESS_GETTING_EMPLOYEES,
        payload: {
            employees: undefined,
            employeesMessage: 'Success getting employees'
        }
    });
    expect(newState).toEqual({
        employees: undefined,
        employeesMessage: 'Success getting employees',
        id:0
    });
});

test('returns state of failed employee fetch', () => {
    const newState = employeesReducer(undefined, {
        type: employeesTypes.FAIL_GETTING_EMPLOYEES,
        payload: {
            employees:{}
        }
    });
    expect(newState).toEqual({ 
            employees: null,
            employeesMessage: undefined,
            id: 0
    });
});

test('returns state of successful employee fetch by id', () => {
    const newState = employeesReducer(undefined, {
        type: employeesTypes.SUCCESS_GETTING_EMP_ID,
        payload: {
            employees: {},
            id: 1
        }
    });
    expect(newState).toEqual({
        "employees": null,  
        "employeesMessage": "", 
        "id": 1
    });
});
