import { filterBuildingsFunction } from '../../utils/helper-functions/filterBuildings';


let buildings = {
    buildings: [
        {
            name: 'Muma',
            trainingLead: {
                firstName: "Harold",
                lastname: "Smith"
            }
        },
        {
            name: 'NEC',
            trainingLead: {
                firstName: "Felix",
                lastname: "Washington"
            }
        },
    ]
}
test('Should receive one building, test input is m', () => {
    expect(filterBuildingsFunction(buildings, "m").length).toBe(1);
});

test('Should receive zero building, test input is z', () => {
    expect(filterBuildingsFunction(buildings, "z").length).toBe(0);
});
test('Should receive zero building, test input is nothing', () => {
    expect(filterBuildingsFunction(buildings, "").length).toBe(0);
});