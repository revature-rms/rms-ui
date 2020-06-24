import React from 'react';
import BuildingDetailsComponent, { IBuildingDetailsProps } from '../BuildingDetailsComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/search-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Input, Button } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/seach-service', () => {

    return {
        findBuildingById: jest.fn()
    };
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

beforeEach(() => {
    (mockRemote.findBuildingById as jest.Mock).mockClear();
})

afterEach(() => {
    jest.clearAllMocks();
});

const props: IBuildingDetailsProps = {
};

const buildingDetailsComponent = <BuildingDetailsComponent {...props} />


// Need to test the material table's onRowClick as well as the material
// table's Select

describe('BuildingDetailsComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(buildingDetailsComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 16 FormControls', () => {
        const wrapper = mount(buildingDetailsComponent);
        expect(wrapper.find(FormControl)).toHaveLength(16)
    })

    it('Typing into input.name trigger state hook on name', () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).at(0).find("input#name").simulate('change', {
            target: { 
                id: 'name',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).at(0)).toHaveLength(1);
        expect(wrapper.find(Input).at(0).find("input#name").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on name, but hitting the cancel button should revert changes.', () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).at(0).find("input#name").simulate('change', {
            target: { 
                id: 'name',
                value: 'foo' 
            }
        });

        // Cancel the persistance of values
        wrapper.find(Button).at(1).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).at(0)).toHaveLength(1);
        expect(wrapper.find(Input).at(0).find("input#name").prop('value')).toEqual(undefined);
    });

    it('Typing into input.abbrName trigger state hook on abbrMame', () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).at(1).find("input#abbrName").simulate('change', {
            target: { 
                id: 'abbrName',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).at(1)).toHaveLength(1);
        expect(wrapper.find(Input).at(1).find("input#abbrName").prop('value')).toEqual('foo');
    });

    it(`Typing into input.street trigger state hook on street`, () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 

        wrapper.find(Input).find("input#street").simulate('change', {
            target: { 
                id: 'street',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#street")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#street").prop('value')).toEqual(`foo`);
    });

    it(`Typing into input.city trigger state hook on city`, () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 

        wrapper.find(Input).find("input#city").simulate('change', {
            target: { 
                id: 'city',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#city")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#city").prop('value')).toEqual(`foo`);
    });

    it(`Typing into input.state trigger state hook on state`, () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 

        wrapper.find(Input).find("input#state").simulate('change', {
            target: { 
                id: 'state',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#state")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#state").prop('value')).toEqual(`foo`);
    });

    it(`Typing into input.zip trigger state hook on zip`, () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 

        wrapper.find(Input).find("input#zip").simulate('change', {
            target: { 
                id: 'zip',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#zip")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#zip").prop('value')).toEqual(`foo`);
    });

    it(`Typing into input.country trigger state hook on country`, () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 

        wrapper.find(Input).find("input#country").simulate('change', {
            target: { 
                id: 'country',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#country")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#country").prop('value')).toEqual(`foo`);
    });

    it(`Typing into input.bManager trigger state hook on bManager, but isn't persisted`, () => {
        let wrapper = mount(buildingDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 

        wrapper.find(Input).find("input#bManager").simulate('change', {
            target: { 
                id: 'bManager',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were NOT persisted
        expect(wrapper.find(Input).find("input#bManager")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#bManager").prop('value')).toEqual(undefined);
    });

})
