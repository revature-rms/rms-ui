import { filterCampusFunction } from '../../utils/helper-functions/filterCampus';

//mock campus
let campuses = 
    [
        {
            name: 'Muma',
            trainingLead: {
                firstName: "Harold",
                lastName: "Smith"
            }
        },
        {
            name: 'NEC',
            trainingLead: {
                firstName: "Felix",
                lastName: "Washington"
            }
        },
    ]

test('Should receive one building, test input is m', () => {
    expect(filterCampusFunction(campuses, "m").length).toBe(1);
});

test('Should receive zero building, test input is z', () => {
    expect(filterCampusFunction(campuses, "z").length).toBe(0);
});
test('Should receive zero building, test input is nothing', () => {
    expect(filterCampusFunction(campuses, "").length).toBe(0);
});