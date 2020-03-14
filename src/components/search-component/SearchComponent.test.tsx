import { SearchComponent } from './SearchComponent';
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../utils/helper-functions/testUtils';

const setup = (props = {}, state = 0) => {
    const wrapper = shallow(<SearchComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'search-component');
    expect(appComponent.length).toBe(1);
});

test('ResData state is initially an empty string', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('resData');
    expect(initialCounterState).toBe("");
});

test('Filtering state is initially false', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('filtering');
    expect(initialCounterState).toBe(false);
});

test('Should display no resources if user is filtering and there is no match', () => {
    const filtering = true;
    const wrapper = setup(null, { filtering });
    const display = FindByTestAttr(wrapper, 'search-display');
    expect(display.text()).toContain('No resource');
});

test('Should display nothing if user is not filtering', () => {
    const filtering = false;
    const wrapper = setup(null, { filtering });
    const display = FindByTestAttr(wrapper, 'search-display');
    expect(display.length).toBe(0);
});