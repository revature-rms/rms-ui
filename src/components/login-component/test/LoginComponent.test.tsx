import * as React from 'react';
import LoginComponent, { ILoginProps } from '../LoginComponent';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

/* Default Properties for rendering LoginComponent*/
/* 
   LoginComponent is dependent on these properties, so they must
   be supplied.
*/
const props: ILoginProps = {
    authUser: undefined,
    loginMessage: "",
    login: jest.fn()
}

configure({adapter: new Adapter()});

describe('<LoginComponent />', () => {

    it('Renders without error', () => {
        // Shallowly render the LoginComponent with properties
        const wrapper = shallow(<LoginComponent {...props}/>)

        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy
    });
})