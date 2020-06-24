import * as React from 'react';
import CampusListComponent, { ICampusProps } from '../CampusListComponent';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { AppUser } from '../../../dtos/appUser';

/* Default Properties for rendering CampusistComponent*/
/* 
   CampusListComponent is dependent on these properties, so they must
   be supplied.
*/

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

const props: ICampusProps = {
    currentUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager'])
};

configure({adapter: new Adapter()});

describe('<CampusListComponent />', () => {

    it('Renders without error', () => {
        // Shallowly render the CampusListComponent with properties
        const wrapper = shallow(<CampusListComponent {...props}/>)

        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy
    });
})