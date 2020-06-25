import {getAllCampusAPI} from '../campus-service';

test('Testing if data is coming back from axios request', async () => {
    let data:any = await getAllCampusAPI();
    expect(data.length).not.toBe(0);
});

