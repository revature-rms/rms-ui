import { roomTestTypes } from "../action-mappers/room-details-actions";
import { roomReducer } from './room-reducer';

test('Should return default state of room', () => {
    const newState = roomReducer(undefined, {});
    expect(newState).toEqual({
       room:{}
    });
});

test('returns state of successful room fetch', () => {
    const newState = roomReducer(undefined, {
        type: roomTestTypes.DEFAULT_ROOM_TEST,
        payload: {
            room: {number:2301}
        }
    });
    expect(newState).toEqual({
        room: {number:2301}
    });
});

