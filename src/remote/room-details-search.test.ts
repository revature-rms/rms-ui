import {testRoom} from './room-details-search';

test('Testing if data is coming back from axios request', async () => {
    let data:any = await testRoom();
    expect(data.length).not.toBe(0);
});

