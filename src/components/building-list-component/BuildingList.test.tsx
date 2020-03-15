import {BuildingListComponent} from './BuildingListComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../utils/helper-functions/testUtils';

let propsData = {
    campuses : [{
        name: "test",
        abbr: "test",
        buildings : [
            {
                name: "test",
                trainingLead: {
                    firstName: "test",
                    lastName: "test"
                },
                physicalAddress: {
                    unit_street: "test",
                    city: "test"
                }
            }
        ]
    }]}
const setup = (props = propsData, state = 0) => {
    const wrapper = shallow(<BuildingListComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});

test('component did mount',  () => {
    const instance:any = setup().instance();
      jest.spyOn(instance, 'gatherData');
      instance.componentDidMount();
      expect(instance.gatherData).toHaveBeenCalledTimes(1)
});

test('Test map buildings function',  () => {
    const wrapper = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'mapBuildings');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('Test make table function',  () => {
    const wrapper = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'makeTable');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('Test sub header',  () => {
    const wrapper = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'subHeader');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});
