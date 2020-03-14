import {roomList} from './room-list-search';

test('Testing if data is coming back from axios request', async () => {
    let data:any = await roomList();
    expect(data.length).not.toBe(0);
});

