import App from './App'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from './utils/helper-functions/testUtils';


const setup = (props = {
  loggedIn: true
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

test('renders login content without error when user is not logged in', () => {
  const wrapper = (props={
    loggedIn: false
  }, state=null) => {
    const wrapper = shallow(<App {...props} />)
    return wrapper;
  }
  let newWrapper = wrapper();
  //find element with the data-test value
  const appComponent = FindByTestAttr(newWrapper, 'login-content');
  expect(appComponent.length).toBe(1);
});