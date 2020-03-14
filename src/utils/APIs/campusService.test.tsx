import {campusServiceApi} from './campusServiceApis';


test('Testing if data is coming back from axios request',  async () => {
    let data:any =  await campusServiceApi.get("");
    expect(data).not.toBeNull();
});