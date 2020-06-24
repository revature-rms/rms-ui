import * as React from 'react';
import CampusDetailsComponent, { ICampusDetailsProps } from '../CampusDetailsComponent';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

/* Default Properties for rendering BuildingDetailsComponent*/
/* 
   BuildingDetailsComponent is dependent on these properties, so they must
   be supplied.
*/

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

const props: ICampusDetailsProps = {
};

configure({adapter: new Adapter()});

describe('<CampusDetailsComponent />', () => {

    it('Renders without error', () => {
        // Shallowly render the CampusDetailsComponent with properties
        const wrapper = shallow(<CampusDetailsComponent {...props}/>)

        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy
    });
})