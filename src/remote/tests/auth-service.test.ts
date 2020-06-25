import axios from 'axios';
import moxios from 'moxios'
import { userLogin } from '../auth-service';

jest.mock('axios');

/**Can't figure out how to do mock axios request functions */
// describe('Auth-Service', () => {
//     let axiosInstance:any;
//     beforeEach(() => {
//         let axiosInstance = axios.create()
//         moxios.install(axiosInstance)
//     })

//     afterEach(() => {
//         moxios.uninstall(axiosInstance)
//     })

//     it('Should reach the endpoint', (done) => {
//         moxios.stubRequest('http://localhost:8080/auth/', {
//           status: 200,
//           responseText: '...'
//         })
//         axiosInstance.post(userLogin('user', 'password'))
//             .finally(done)
//     })
// })
