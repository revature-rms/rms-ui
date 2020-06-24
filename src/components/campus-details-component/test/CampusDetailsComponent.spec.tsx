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

    it('Should render 74 Divs', () => {
        const wrapper = mount(campusDetailsComponent);
        expect(wrapper.find("div")).toHaveLength(74)
    })

    it('Should render 1 MaterialTable', () => {
        const wrapper = mount(campusDetailsComponent);
        expect(wrapper.find(MaterialTable)).toHaveLength(1)
    })

    it('Typing into input.name trigger state hook on name', () => {
        let wrapper = mount(campusDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#name").simulate('change', {
            target: { 
                id: 'name',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#name")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#name").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on abbrName', () => {
        let wrapper = mount(campusDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#abbrName").simulate('change', {
            target: { 
                id: 'abbrName',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#abbrName")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#abbrName").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on street', () => {
        let wrapper = mount(campusDetailsComponent);

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

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#street")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#street").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on city', () => {
        let wrapper = mount(campusDetailsComponent);

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

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#city")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#city").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on state', () => {
        let wrapper = mount(campusDetailsComponent);

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

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#state")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#state").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on zip', () => {
        let wrapper = mount(campusDetailsComponent);

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

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#zip")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#zip").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on country', () => {
        let wrapper = mount(campusDetailsComponent);

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

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#country")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#country").prop('value')).toEqual('foo');
    });

    it('Typing into input.name trigger state hook on tManager', () => {
        let wrapper = mount(campusDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#tManager").simulate('change', {
            target: { 
                id: 'tManager',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#tManager")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#tManager").prop('value')).toEqual(' ');
    });

    it('Typing into input.name trigger state hook on sManager', () => {
        let wrapper = mount(campusDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#sManager").simulate('change', {
            target: { 
                id: 'sManager',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#sManager")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#sManager").prop('value')).toEqual(' ');
    });

    it(`Typing into input.bManager trigger state hook on hrLead, but isn't persisted`, () => {
        let wrapper = mount(campusDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 

        wrapper.find(Input).find("input#hrLead").simulate('change', {
            target: { 
                id: 'hrLead',
                value: 'foo' 
            }
        });
        
        // Persist values by hitting the save button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were NOT persisted
        expect(wrapper.find(Input).find("input#hrLead")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#hrLead").prop('value')).toEqual(" ");
    });
})
