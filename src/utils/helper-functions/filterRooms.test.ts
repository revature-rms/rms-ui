import { filterRoomsFunction } from '../../utils/helper-functions/filterRooms';

let room = {
    rooms: [
        {
            roomNumber: "2301",
            batch: {
                name:"191216-java",
                trainer: {
                    firstName: "Robert",
                    lastName: "Smith"
                }
            }
        }
    ]
}


test('Should receive one room, test input is m', () => {
    expect(filterRoomsFunction(room, "r").length).toBe(1);
});

test('Should receive zero rooms, test input is z', () => {
    expect(filterRoomsFunction(room, "z").length).toBe(0);
});
test('Should receive zero rooms, test input is nothing', () => {
    expect(filterRoomsFunction(room, "").length).toBe(0);
});