import React from 'react';
import CampusListComponent, { ICampusProps } from '../CampusListComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/campus-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Input, Button } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';
import Wrapper from '../../../utils/div-wrapper/Wrapper';
import MaterialTable from 'material-table';

configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

const props: ICampusProps = {
    currentUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager']),
};

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

const campusComponent = <CampusListComponent {...props} />

describe('CampusListComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(campusComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 1 Material Table', () => {
        const wrapper = mount(campusComponent);
        expect(wrapper.find(MaterialTable)).toHaveLength(1)
    })
})
