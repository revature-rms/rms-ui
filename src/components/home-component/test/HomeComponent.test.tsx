import * as React from 'react';
import HomeComponent, { IHomeProps } from '../HomeComponent';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

/* Default Properties for rendering LoginComponent*/
/* 
   LoginComponent is dependent on these properties, so they must
   be supplied.
*/
const props: IHomeProps = {
    authUser: undefined
}

configure({adapter: new Adapter()});

describe('<HomeComponent />', () => {

    it('Renders without error', () => {
        // Shallowly render the LoginComponent with properties
        const wrapper = shallow(<HomeComponent {...props}/>)

        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy
    });
})