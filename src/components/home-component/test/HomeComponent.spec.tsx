import React from 'react';
import HomeComponent, { IHomeProps } from '../HomeComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/campus-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Grid } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/campus-service', () => {

    return {
        getAllCampus: jest.fn(),
        getBuildingById: jest.fn()
    };
});

beforeEach(() => {
    (mockRemote.getAllCampus as jest.Mock).mockClear();
    (mockRemote.getBuildingById as jest.Mock).mockClear();
})

afterEach(() => {
    jest.clearAllMocks();
});

const props: IHomeProps = {
    authUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager'])
};

const homeComponent = <HomeComponent {...props} />

describe('HomeComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(homeComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 5 Grids', () => {
        const wrapper = mount(homeComponent);
        expect(wrapper.find(Grid)).toHaveLength(5);
    })

    it('Should call getAllCampus and getBuildingById on mount', () => {
        /* For some reason anything after the remote calls in getBuildings and
           getRooms does not get hit in the coverage report. May be worth investigating.
         */
        const wrapper = mount(homeComponent);
        expect(mockRemote.getAllCampus).toHaveBeenCalled();
        expect(mockRemote.getBuildingById).toHaveBeenCalled();
    })
})
