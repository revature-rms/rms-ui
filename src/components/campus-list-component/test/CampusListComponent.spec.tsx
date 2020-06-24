import React from 'react';
import CampusListComponent, { ICampusProps } from '../CampusListComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/search-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Grid } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';
import { BrowserRouter } from 'react-router-dom';
import MaterialTable from 'material-table';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/search-service', () => {

    return {
        findAllCampusesByOwner: jest.fn(),
        findAllCampuses: jest.fn()

    };
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

const props: ICampusProps = {
    currentUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager'])
};

const campusListComponent = <CampusListComponent {...props} />

/* Anything after the remote calls does not seem to be rendered
   in our tests.
 */

describe('CampusListComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(campusListComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 1 MaterialTable', () => {
        const wrapper = mount(campusListComponent);
        expect(wrapper.find(MaterialTable)).toHaveLength(1);
    })

    it('Should render findAllCampuses when the user role contains Admin', () => {
        const wrapper = mount(campusListComponent);
        expect(mockRemote.findAllCampuses).toHaveBeenCalled();
    }) 

    it('Should render findAllCampuses when the user role is TSM', () => {
        //This is pretty bad, maybe find another way to change roles in the future?
        const testProps: ICampusProps = {
            currentUser: new AppUser(1, "username", "password", 1, ["Training Site Manager"])
        };
        const tempCampusListComponent = <CampusListComponent {...testProps}/>
        const wrapper = mount(tempCampusListComponent);
        expect(mockRemote.findAllCampusesByOwner).toHaveBeenCalled();
    })

})


