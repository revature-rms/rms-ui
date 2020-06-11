import { EmployeeGlobalComponent } from '../EmployeeGlobalComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';

let propsData = {
    match: {
        params: {
            id:"testtest0",
        }
    }
}

let stateData = {
    employee : {
        id: 0,
        firstName: "test",
        lastName: "test",
        email: "test",
        title: "test",
        department: "",
        resourceMetadata: {
            resourceCreator: {
                username: "test"
            },
            resourceCreationDateTime: "test",
            lastModifiedDateTime: "test",
            lastModifier: {
                username: "test"
            },
            resourceOwner: {
                username: "test"
            }
        }
    }
}

const setup = (props: any = propsData, state = stateData) => {
    const wrapper = shallow(<EmployeeGlobalComponent {...props} />)
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
    const FakeFun = jest.spyOn(wrapper.instance(), 'setEmployee');
    wrapper.instance().componentDidUpdate();
    expect(FakeFun).toHaveBeenCalled();
});
