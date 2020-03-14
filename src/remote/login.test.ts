import {userLogin} from './login';


test('Testing if data is coming back from axios request',  async () => {
    let data:any =  await userLogin();
    expect(data).not.toBeNull();
});