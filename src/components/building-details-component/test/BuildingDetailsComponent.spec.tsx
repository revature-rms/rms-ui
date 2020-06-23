import React from 'react';
import BuildingDetailsComponent, { IBuildingDetailsProps } from '../BuildingDetailsComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/campus-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Input, Button } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/campus-service', () => {

    return {
        getBuildingById: jest.fn()
    };
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

beforeEach(() => {
    (mockRemote.getBuildingById as jest.Mock).mockClear();
})

afterEach(() => {
    jest.clearAllMocks();
});

const props: IBuildingDetailsProps = {
};

const buildingDetailsComponent = <BuildingDetailsComponent {...props} />


// TESTING INCOMPLETE.

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

        console.log(wrapper.find(Button).html())

        // Hit enable editting button
       // wrapper.find(Button).simulate(`click`, {})

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
        expect(wrapper.find(Input).at(0)).toHaveLength(1);

        console.log(wrapper.find(Button).html())
        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).at(0).find("input#name").prop('value')).toEqual('foo');
    });

    // it('Typing into input.abbrName trigger state hook on abbrName', () => {
    //     //Currently there is no onChange for the abbrName, address, or building manager.
        
    //     let wrapper = mount(buildingDetailsComponent);


    //     console.log(wrapper.find(Input).at(1).html())

    //     // Hit enable editting button
    //     wrapper.find(`div#enableEdittingButton`).simulate(`click`, {})

    //     // Edit values
    //     wrapper.find(Input).at(1).find("input#abbrName").simulate('change', {
    //         target: { 
    //             id: 'abbrName',
    //             value: 'foo' 
    //         }
    //     });
    //     expect(wrapper.find(Input).at(1)).toHaveLength(1);

    //     // Persist values
    //     wrapper.find(`div#saveButton`).simulate(`click`, {});

    //     // Check that values were persisted
    //     expect(wrapper.find(Input).at(1).find("input#abbrName").prop('value')).toEqual('foo');
    // });

})
