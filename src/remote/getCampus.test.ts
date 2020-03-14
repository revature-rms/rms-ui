import {getCampuses} from './getCampus';

test('Testing if data is coming back from axios request', async () => {
    let data:any = await getCampuses();
    expect(data.length).not.toBe(0);
});
