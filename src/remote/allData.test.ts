import {allData} from './allData';

test('Testing if data is coming back from axios request', async () => {
    let data:any = await allData();
    expect(data.length).not.toBe(0);
});


