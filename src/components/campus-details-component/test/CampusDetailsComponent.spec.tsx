import React from 'react';
import CampusDetailsComponent, { ICampusDetailsProps } from '../CampusDetailsComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/campus-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Input, Button } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';
import MaterialTable from 'material-table';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/campus-service', () => {

    return {
        getCampusById: jest.fn()
    };
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

beforeEach(() => {
    (mockRemote.getCampusById as jest.Mock).mockClear();
})

afterEach(() => {
    jest.clearAllMocks();
});

const props: ICampusDetailsProps = {
};

const campusDetailsComponent = <CampusDetailsComponent {...props} />


// TESTING INCOMPLETE.

describe('CampusDetailsComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(campusDetailsComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 17 FormControls', () => {
        const wrapper = mount(campusDetailsComponent);
        expect(wrapper.find(FormControl)).toHaveLength(17)
    })

    it('Should render 73 Divs', () => {
        const wrapper = mount(campusDetailsComponent);
        expect(wrapper.find("div")).toHaveLength(73)
    })

    it('Should render 1 MaterialTable', () => {
        const wrapper = mount(campusDetailsComponent);
        expect(wrapper.find(MaterialTable)).toHaveLength(1)
    })

})
