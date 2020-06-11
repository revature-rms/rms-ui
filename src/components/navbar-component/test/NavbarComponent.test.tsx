import NavbarComponent from '../NavbarComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';

const setup = (props = {}, state = 0) => {
    const wrapper = shallow(<NavbarComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders top bar without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'navbar-top');
    expect(appComponent.length).toBe(1);
});

test('renders side navbar without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'navbar-side');
    expect(appComponent.length).toBe(1);
});