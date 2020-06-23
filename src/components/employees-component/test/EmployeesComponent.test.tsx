import * as React from 'react';
import EmployeesComponent, { IEmployeesProps } from '../EmployeesComponent';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { AppUser } from '../../../dtos/appUser';

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
    currentUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager'])
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