import {getAllEmployeesAPI} from '../employee-service';


test('Testing if data is coming back from axios request', async () => {
    let data:any = await getAllEmployeesAPI();
    expect(data.length).not.toBe(0);
});