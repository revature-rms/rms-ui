import App from './App'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from './utils/helper-functions/testUtils';


const mainSetup = (props = {
  loggedIn: true
}, state = null) => {
  const wrapper = shallow(
    <App {...props} />
  )
  return wrapper;
}
const loginSetup = (props = {
  loggedIn: false
}, state = null) => {
  const wrapper = shallow(
    <App {...props} />
  )
  return wrapper;
}

test('renders main content without error', () => {
  const wrapper = mainSetup();
  //find element with the data-test value
  const appComponent = FindByTestAttr(wrapper, 'main-content');
  expect(appComponent.length).toBe(1);
});

test('renders login content without error when user is not logged in', () => {
  const wrapper = loginSetup()
  //find element with the data-test value
  const appComponent = FindByTestAttr(wrapper, 'login-content');
  expect(appComponent.length).toBe(1);
});