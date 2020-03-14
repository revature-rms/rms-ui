import { filterCampusFunction } from '../../utils/helper-functions/filterCampus';

let buildings = {
    buildings: [
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
}

test('Should receive one building, test input is m', () => {
    expect(filterCampusFunction(buildings, "m").length).toBe(1);
});

test('Should receive zero building, test input is z', () => {
    expect(filterCampusFunction(buildings, "z").length).toBe(0);
});
test('Should receive zero building, test input is nothing', () => {
    expect(filterCampusFunction(buildings, "").length).toBe(0);
});