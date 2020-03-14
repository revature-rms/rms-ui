import {apiClient} from './index';


test('Testing if data is coming back from axios request',  async () => {
    let data:any =  await apiClient.get("");
    expect(data).not.toBeNull();
});