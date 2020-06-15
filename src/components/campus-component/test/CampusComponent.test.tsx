import { CampusComponent } from '../CampusComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';


let propsData = {
    campuses: [{
        name: "test",
        abbr: "test",
        shippingAddress: {
            unit_street: "test",
            city: "test",
            state: ""
        },
        trainingManager: {
            firstName: '',
            lastName: ''
        },
        stagingManager: {
            firstName: '',
            lastName: ''
        },
        hrLead: {
            firstName: '',
            lastName: ''
        },
        buildings: [
            {
                name: "test",
                trainingLead: {
                    firstName: "test",
                    lastName: "test"
                },
                physicalAddress: {
                    unit_street: "test",
                    city: "test",
                    state: ""
                }
            }
        ]
    }]
};
const setup = (props: any = propsData, state = 0) => {
    const wrapper = shallow(<CampusComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});

test('Test make table function',  () => {
    const wrapper:any = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'makeTable');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('Test sub header',  () => {
    const wrapper:any = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'subHeader');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('Test map campuses function',  () => {
    const wrapper:any = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'mapCampuses');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

