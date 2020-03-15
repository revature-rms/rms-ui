import { sortCampusFunction } from './SortCampusesFunction';


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
        {
            name: 'AEC',
            trainingLead: {
                firstName: "Felix",
                lastName: "Washington"
            }
        },
    ]

test('Should receive two building', () => {
    expect(sortCampusFunction( "ascending", campuses).length).toBe(3);
});

test('Should receive two building', () => {
    expect(sortCampusFunction("descending", campuses).length).toBe(3);
});
