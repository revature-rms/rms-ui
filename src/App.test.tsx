import App from './App'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from './utils/helper-functions/testUtils';
import { Provider } from 'react-redux';
import { store } from './Store';

const setup = (props = {
  loggedIn:true
}, state = 0) => {
    const wrapper = shallow(
      <App {...props} />
    )
    return wrapper;
}

test('renders main content without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});
// test('renders login content without error', () => {
//     const wrapper = setup();
//     //find element with the data-test value
//     const appComponent = FindByTestAttr(wrapper, 'login-content');
//     appComponent.setProps({
//       loggedIn:false
//     })
//     expect(appComponent.length).toBe(1);
// });