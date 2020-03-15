import { campusTypes } from "../action-mappers/campus-action"
import { campusReducer } from './campus-reducer';

test('Should return default state of campus', () => {
    const newState = campusReducer(undefined, {});
    expect(newState).toEqual({
        "campus": null, 
        "campusMessage": "", 
        "campuses": null, 
        "id": 0
    });
});

test('returns state of successful campus fetch', () => {
    const newState = campusReducer(undefined, {
        type: campusTypes.SUCCESS_GETTING_CAMPUS,
        payload: {
            campuses: {},
            employeesMessage: 'Success getting campuses'
        }
    });
    expect(newState).toEqual({
        "campus": null, 
        "campusMessage": "", 
        "campuses": undefined, 
        "employeesMessage": 
        "Success getting campuses", 
        "id": 0
    });
});

test('returns state of failed campus fetch', () => {
    const newState = campusReducer(undefined, {
        type: campusTypes.FAIL_GETTING_CAMPUS,
        payload: {
            campuses: {}
        }
    });
    expect(newState).toEqual({
        "campus": null, 
        "campusMessage": undefined, 
        "campuses": null,  
        "id": 0
    });
});

test('returns state of successful campus fetch by id', () => {
    const newState = campusReducer(undefined, {
        type: campusTypes.SUCCESS_GETTING_CAMPUS_ID,
        payload: {
            campuses: {},
            id: 1
        }
    });
    expect(newState).toEqual({
        "campus": null, 
        "campusMessage": "", 
        "campuses": null,  
        "id": 1
    });
});
