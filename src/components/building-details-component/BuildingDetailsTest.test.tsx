import BuildingDetailsComponent from './BuildingDetailsComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../utils/helper-functions/testUtils';

let propsData = {
    match: {
        params: {
            name: "test"
        }
    },
    campus: [{
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
}

const setup = (props: any = propsData, state = {visible: false}) => {
    const wrapper = shallow(<BuildingDetailsComponent {...props} />)
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

test('check return value of gather data',  async () => {
    const instance:any = setup().instance();
       let data = await instance.gatherData()
      expect(data).toBeDefined();
});

test('component did update',  () => {
    const wrapper:any = setup();
    wrapper.setState({
        campus: propsData["campus"][0]
    })
    const FakeFun = jest.spyOn(wrapper.instance(), 'setCampus');
    wrapper.instance().componentDidUpdate();
    expect(FakeFun).toHaveBeenCalled();
});

test('Test make table function',  () => {
    const wrapper:any = setup();
    wrapper.setState({
        campus: propsData["campus"][0]
    })
    const FakeFun = jest.spyOn(wrapper.instance(), 'makeTable');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});



test('Test sub header',  () => {
    const wrapper:any = setup();
    wrapper.setState({
        campus: propsData["campus"][0]
    })
    const FakeFun = jest.spyOn(wrapper.instance(), 'subHeader');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('Test map buildings function with search term of z',  () => {
    const wrapper:any = setup();
    wrapper.setState({
        campus: propsData["campus"][0],
        searchTerm: "z"
    })
    const FakeFun = jest.spyOn(wrapper.instance(), 'mapBuildings');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('Test map buildings function with search term of t',  () => {
    const wrapper:any = setup();
    wrapper.setState({
        campus: propsData["campus"][0],
        searchTerm: "t"
    })
    const FakeFun = jest.spyOn(wrapper.instance(), 'mapBuildings');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

