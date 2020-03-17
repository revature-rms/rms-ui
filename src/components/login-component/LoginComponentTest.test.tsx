import {LoginComponent} from './LoginComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../utils/helper-functions/testUtils';

const setup = (props:any = {login: () => {return "test"}}, state = 0) => {
    const wrapper:any = shallow(<LoginComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});

test('component did update',  () => {
    const wrapper:any = setup();
     wrapper.instance().signUserIn()
});

