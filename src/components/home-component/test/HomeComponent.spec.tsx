import React from 'react';
import HomeComponent, { IHomeProps } from '../HomeComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/search-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Grid } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/search-service', () => {

    return {
        findAllCampuses: jest.fn(),
        findAllRoomByOwner: jest.fn()
    };
});

beforeEach(() => {
    (mockRemote.findAllCampuses as jest.Mock).mockClear();
    (mockRemote.findAllRoomByOwner as jest.Mock).mockClear();
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

    it('Should call findAllCampuses and findAllRoomByOwner on mount', () => {
        /* For some reason anything after the remote calls in getBuildings and
           getRooms does not get hit in the coverage report. May be worth investigating.
         */
        const wrapper = mount(homeComponent);
        expect(mockRemote.findAllCampuses).toHaveBeenCalled();
        expect(mockRemote.findAllRoomByOwner).toHaveBeenCalled();
    })
})
