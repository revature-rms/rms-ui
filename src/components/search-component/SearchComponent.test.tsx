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

test('component did mount',  () => {
    const instance:any = setup().instance();
      jest.spyOn(instance, 'gatherData');
      instance.componentDidMount();
      expect(instance.gatherData).toHaveBeenCalledTimes(1)
});
test('gather data called, should not be null', async () => {
    const wrapper = setup();
    let test =  await wrapper.instance().gatherData();
    expect(test).not.toBeNull();
});


let employeeData = {
    id: 0,
    firstName: "test",
    lastName: "testname"
}

test('checks show resources employee functionality', () => {
    const wrapper = setup();
    let test =  wrapper.instance().showResource(employeeData);
    expect(test.key).toBe("testtestname0")
});

let building = {
    id: 0,
    name: "test",
}

test('checks show resources buildings functionality', () => {
    const wrapper = setup();
    let test =  wrapper.instance().showResource(building);
    expect(test.key).toBe("test0")
});


let campus = {
    id: 0,
    name: "test",
    hrLead: "",
    amenties: undefined
}

test('checks show resources campus functionality', () => {
    const wrapper = setup();
    let test =  wrapper.instance().showResource(campus);
    expect(test.key).toBe("test0")
});

