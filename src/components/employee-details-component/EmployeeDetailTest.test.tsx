import { EmployeeDetailsComponent } from './EmployeeDetailsComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../utils/helper-functions/testUtils';

let propsData = {
    employees: {
        Employee: [{
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
        }]
    }
}
let employee = propsData.employees.Employee[0]
let stateData = {
    employee: employee,
    fname: employee.firstName,
    lname: employee.lastName,
    email: employee.email,
    title: employee.title,
    department: employee.department,
    updateInfo: ''
}

const setup = (props: any = propsData, state = stateData) => {
    const wrapper = shallow(<EmployeeDetailsComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});

test('component did mount', () => {
    const instance: any = setup().instance();
    instance.componentDidMount();
});











