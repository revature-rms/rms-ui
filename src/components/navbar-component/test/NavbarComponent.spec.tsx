import React from 'react';
import NavbarComponent, { INavbarProps } from '../NavbarComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/campus-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Grid } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';
import { BrowserRouter } from 'react-router-dom';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]


const props: INavbarProps = {
    currentUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager']),
    login: jest.fn()
};

const navbarComponent = <NavbarComponent {...props} />

describe('NavbarComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(navbarComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 12 divs when a user has all roles', () => {
        const wrapper = mount(<BrowserRouter>{navbarComponent}</BrowserRouter>);
        expect(wrapper.find("div")).toHaveLength(12);
    })

    it('Should render 8 divs when a user has no roles', () => {
        //This is pretty bad, maybe find another way to change roles in the future?
        const testProps: INavbarProps = {
            currentUser: new AppUser(1, "username", "password", 1, []),
            login: jest.fn()
        };
        const testNavbarComponent = <NavbarComponent {...testProps}/>
        const wrapper = mount(<BrowserRouter>{testNavbarComponent}</BrowserRouter>);
        expect(wrapper.find("div")).toHaveLength(8);
    })

})


