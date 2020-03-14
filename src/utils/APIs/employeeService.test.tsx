import {employeesServiceApi} from './employeesServiceApis';


test('Testing if data is coming back from axios request',  async () => {
    let data:any =  await employeesServiceApi.get("");
    expect(data).not.toBeNull();
});