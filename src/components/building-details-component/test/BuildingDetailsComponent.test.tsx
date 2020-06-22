import * as React from 'react';
import BuildingDetailsComponent, { IBuildingDetailsProps } from '../BuildingDetailsComponent';
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

const props: IBuildingDetailsProps = {
};

configure({adapter: new Adapter()});

describe('<BuildingDetailsComponent />', () => {

    it('Renders without error', () => {
        // Shallowly render the BuildingDetailsComponent with properties
        const wrapper = shallow(<BuildingDetailsComponent {...props}/>)

        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy
    });
})