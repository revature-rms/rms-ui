import React from 'react';
import BuildingListComponent, { IBuildingListProps } from '../BuildingListComponent'
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
        findBuildingByOwner: jest.fn(),
        findAllBuilding: jest.fn()

    };
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

const props: IBuildingListProps = {
    currentUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager'])
};

const buildingListComponent = <BuildingListComponent {...props} />

/* Need to test the material table's onRowClick as well as the material
   table's Select. Anything after the remote calls does not seem to be rendered
   in our tests.
 */

describe('BuildingListComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(buildingListComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 1 MaterialTable', () => {
        const wrapper = mount(buildingListComponent);
        expect(wrapper.find(MaterialTable)).toHaveLength(1);
    })

    it('Should render findAllBuildings when the user role contains Admin', () => {
        const wrapper = mount(buildingListComponent);
        expect(mockRemote.findAllBuilding).toHaveBeenCalled();
    }) 

    it('Should render findAllCampuses when the user role is TSM', () => {
        //This is pretty bad, maybe find another way to change roles in the future?
        const testProps: IBuildingListProps = {
            currentUser: new AppUser(1, "username", "password", 1, ["Training Site Manager"])
        };
        const tempBuildingListComponent = <BuildingListComponent {...testProps}/>
        const wrapper = mount(tempBuildingListComponent);
        expect(mockRemote.findAllCampusesByOwner).toHaveBeenCalled();
    })

    it('Should render findBuildingByOwner when the user role is Building Manager', () => {
        //This is pretty bad, maybe find another way to change roles in the future?
        const testProps: IBuildingListProps = {
            currentUser: new AppUser(1, "username", "password", 1, ["Building Manager"])
        };
        const tempBuildingListComponent = <BuildingListComponent {...testProps}/>
        const wrapper = mount(tempBuildingListComponent);
        expect(mockRemote.findBuildingByOwner).toHaveBeenCalled();
    })

})


