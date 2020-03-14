import Wrapper from './Wrapper'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../utils/helper-functions/testUtils';

const setup = (props={}, state = 0) => {
    const wrapper = shallow(<Wrapper {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});