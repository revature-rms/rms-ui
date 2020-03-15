import { sortBuildingFunction } from '../../utils/helper-functions/sortBuilidingFunction';


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
        {
            name: 'AEC',
            trainingLead: {
                firstName: "Felix",
                lastname: "Washington"
            }
        }
    ]
}
test('Should receive two building', () => {
    expect(sortBuildingFunction( "ascending", buildings.buildings).length).toBe(3);
});

test('Should receive two building', () => {
    expect(sortBuildingFunction("descending", buildings.buildings).length).toBe(3);
});
