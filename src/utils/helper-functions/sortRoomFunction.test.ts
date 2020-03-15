import { sortCampusFunction } from './SortCampusesFunction';
import { sortRoomFunction } from './sortRoomFunction';


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
        },
        {
            roomNumber: "301",
            batch: {
                name:"191216-java",
                trainer: {
                    firstName: "Robert",
                    lastName: "Smith"
                }
            }
        },
        {
            roomNumber: "100",
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

test('Should receive two building', () => {
    expect(sortRoomFunction( "ascending", room.rooms).length).toBe(3);
});

test('Should receive two building', () => {
    expect(sortRoomFunction("descending", room.rooms).length).toBe(3);
});
