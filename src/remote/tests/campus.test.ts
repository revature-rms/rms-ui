import {getAllcampusAPI} from '../campus-service';

test('Testing if data is coming back from axios request', async () => {
    let data:any = await getAllcampusAPI();
    expect(data.length).not.toBe(0);
});

