import * as React from 'react';
import EmployeesComponent, { IEmployeesProps } from '../EmployeesComponent';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

/* Default Properties for rendering EmployeesComponent*/
/* 
   EmployeesComponent is dependent on these properties, so they must
   be supplied.
*/

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

const props: IEmployeesProps = {
    employees: undefined,
    employeesMessage: "",
    getAllEmployees: jest.fn(),
    updateId: jest.fn()
};

configure({adapter: new Adapter()});

describe('<EmployeesComponent />', () => {

    it('Renders without error', () => {
        // Shallowly render the EmployeeComponent with properties
        const wrapper = shallow(<EmployeesComponent {...props}/>)

        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy
    });
})