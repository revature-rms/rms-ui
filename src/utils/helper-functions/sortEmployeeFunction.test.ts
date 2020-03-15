import { sortCampusFunction } from './SortCampusesFunction';
import { sortRoomFunction } from './sortRoomFunction';
import { sortEmployeesFunction } from './sortEmployeesFunction';


let employees ={
    Employee: 
        [
            {
                firstName: "John",
                lastName: "Smith"
            },
            {
                firstName: "Gerald",
                lastName: "Washington"
            },
            {
                firstName: "Abe",
                lastName: "Davis"
            }
        ]
}

test('Should receive two building', () => {
    expect(sortEmployeesFunction( "ascending", employees.Employee).length).toBe(3);
});

test('Should receive two building', () => {
    expect(sortEmployeesFunction("descending", employees.Employee).length).toBe(3);
});
