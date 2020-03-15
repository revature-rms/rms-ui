import {roomsTypes} from "../action-mappers/room-list-actions";
import {roomsReducer} from './rooms-reducer';

test('Should return default state', () => {
  const newState = roomsReducer(undefined, {});
  expect(newState).toEqual({building:{}});
});

test('returns room', () => {
  const newState = roomsReducer(undefined, { 
      type: roomsTypes.GET_ALL_ROOMS,
      payload: {
          building: {room: 2301}
      }
    });
  expect(newState).toEqual({
        building: {room:2301}
  });
});
