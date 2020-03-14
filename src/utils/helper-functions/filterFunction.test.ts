import { filterFunction } from '../../utils/helper-functions/filterFunction';

let allData = {
    campus: [
        {
            name: "USF",
            abbrName: "Us",
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
        },
        {
            name: "Reston",
            abbrName: "Res",
            building: [
                {
                    name: 'Test',
                    trainingLead: {
                        firstName: "Harold",
                        lastName: "Smith"
                    }
                },
                {
                    name: 'Test2',
                    trainingLead: {
                        firstName: "Felix",
                        lastName: "Washington"
                    }
                },
            ]
        }
    ],
    Employee: [
        {
            firstName: "John",
            lastName: "Smith"
        },
        {
            firstName: "Gerald",
            lastName: "Washington"
        }
    ],
    building: 
        {
            name: 'Muma',
            abbrName: "mum",
            trainingLead: {
                firstName: "Harold",
                lastName: "Smith"
            }
        }
}


test('Should receive one element, test input is m', () => {
    expect(filterFunction(allData, "m").length).toBe(1);
});
test('Should receive two elements, test input is u', () => {
    expect(filterFunction(allData, "u").length).toBe(2);
});

test('Should receive zero elements, test input is z', () => {
    expect(filterFunction(allData, "z").length).toBe(0);
});
test('returns an undefined variable, test input is nothing', () => {
    expect(filterFunction(allData, "")).toBeUndefined();
});
