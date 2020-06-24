import React from 'react';
import LoginComponent, { ILoginProps } from '../LoginComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/auth-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';
import { BrowserRouter } from 'react-router-dom';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/auth-service', () => {

    return {
        userLogin: jest.fn()
    };
});

beforeEach(() => {
    //Not actually setting the authUser to undefined, need to figure this out
    (props.login as jest.Mock).mockClear();
    (mockRemote.userLogin as jest.Mock).mockClear();
})

afterEach(() => {
    jest.clearAllMocks();
});

const props: ILoginProps = {
    authUser: undefined,
    loginMessage: "",
    login: jest.fn()
};

const loginComponent = <LoginComponent {...props} />

describe('LoginComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    // const setup = (props:any = {login: () => {return "test"}}, state = 0) => {
    //     const wrapper:any = shallow(<LoginComponent {...props} />)
    //     if (state) wrapper.setState(state);
    //     return wrapper;
    // }

    // test('renders without error', () => {
    //     const wrapper = setup();
    //     //find element with the data-test value
    //     const appComponent = FindByTestAttr(wrapper, 'main-content');
    //     expect(appComponent.length).toBe(1);
    // });

    // test('component did update',  () => {
    //     const wrapper:any = setup();
    //     wrapper.instance().signUserIn()
    // });

    it('Should render', () => {
        const wrapper = shallow(loginComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 2 inputs', () => {
        const wrapper = mount(<BrowserRouter>{loginComponent}</BrowserRouter>);
        expect(wrapper.find("input")).toHaveLength(2)
    })

    it('Typing into input.username trigger state hook on username', () => {
        let wrapper = mount(<BrowserRouter>{loginComponent}</BrowserRouter>);
        console.log(wrapper.find('input#username'))
        wrapper.find('input#username').simulate('change', {
            target: { 
                id: 'username',
                value: 'foo' 
            }
        });
        expect(wrapper.find('input#username')).toHaveLength(1);
        expect(wrapper.find('input#username').prop('value')).toEqual('foo');
    });

    it('Typing into input.password trigger state hook on password', () => {
        let wrapper = mount(<BrowserRouter>{loginComponent}</BrowserRouter>);
        console.log(wrapper.find('input#password'))
        wrapper.find('input#password').simulate('change', {
            target: { 
                id: 'password',
                value: 'top-secret' 
            }
        });
        expect(wrapper.find('input#password')).toHaveLength(1);
        expect(wrapper.find('input#password').prop('value')).toEqual('top-secret');
    });

    it('Typing into input.username trigger state hook on username', () => {
        let wrapper = mount(<BrowserRouter>{loginComponent}</BrowserRouter>);
        console.log(wrapper.find('input#username'))
        wrapper.find('input#username').simulate('change', {
            target: { 
                id: 'username',
                value: 'foo' 
            }
        });
        wrapper.find('input#password').simulate('change', {
            target: { 
                id: 'password',
                value: 'top-secret' 
            }
        });
        wrapper.find('button#loginButton').simulate('click', {})
        expect(wrapper.find('input#username').prop('value')).toEqual('foo');
        expect(wrapper.find('input#password').prop('value')).toEqual('top-secret');
        expect(props.login).toHaveBeenCalled();
    });

})
