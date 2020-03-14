import {loginAPI} from './loginApi';


test('Testing if data is coming back from axios request',  async () => {
    let data:any =  await loginAPI.get("");
    expect(data).not.toBeNull();
});