import { filterEmployeesFunction } from '../../utils/helper-functions/filterEmployees';

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
            }
        ]
}

let employeeList = employees["Employee"];

test('Should receive one employee, test input is m', () => {
    expect(filterEmployeesFunction(employeeList, "g").length).toBe(1);
});

test('Should receive zero employees, test input is z', () => {
    expect(filterEmployeesFunction(employeeList, "z").length).toBe(0);
});
test('Should receive zero employees, test input is nothing', () => {
    expect(filterEmployeesFunction(employeeList, "").length).toBe(0);
});