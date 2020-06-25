import React from 'react';
import RoomDetailsComponent, { IRoomDetailsProps } from '../RoomDetailsComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/room-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Input, Button } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/room-service', () => {

    return {
        getRoomByIdAPI: jest.fn()
    };
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

beforeEach(() => {
    (mockRemote.getRoomByIdAPI as jest.Mock).mockClear();
})

afterEach(() => {
    jest.clearAllMocks();
});

const props: IRoomDetailsProps = {
    authUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager'])
};

const roomDetailsComponent = <RoomDetailsComponent {...props} />


// Need to test the material table's onRowClick as well as the material
// table's Select. RoomDetailsComponent isn't fully implemented so
// some functionality won't be able to be tested when writing these tests.

describe('BuildingDetailsComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    it('Should render', () => {
        const wrapper = shallow(roomDetailsComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 16 FormControls', () => {
        const wrapper = mount(roomDetailsComponent);
        expect(wrapper.find(FormControl)).toHaveLength(14)
    })

    it(`Typing into input.roomNumber trigger state hook on name, but isnt persisted
        as saving roomDetails isn't implemented`, () => {
        let wrapper = mount(roomDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#roomNumber").simulate('change', {
            target: { 
                id: 'roomNumber',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were not persisted
        expect(wrapper.find(Input).find("input#roomNumber")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#roomNumber").prop('value')).toEqual(undefined);
    });

    it(`Typing into input.roomNumber trigger state hook on name, but isnt persisted
        as when the cancel button is hit`, () => {
        let wrapper = mount(roomDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#roomNumber").simulate('change', {
            target: { 
                id: 'roomNumber',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(1).simulate(`click`, {});

        // Check that values were not persisted
        expect(wrapper.find(Input).find("input#roomNumber")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#roomNumber").prop('value')).toEqual(undefined);
    });

    it(`Typing into input.maxOccupancy trigger state hook on name, but isnt persisted
        as saving maxOccupancy isn't implemented`, () => {
        let wrapper = mount(roomDetailsComponent);

        // Hit enable editting button
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#maxOccupancy").simulate('change', {
            target: { 
                id: 'maxOccupancy',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were not persisted
        expect(wrapper.find(Input).find("input#maxOccupancy")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#maxOccupancy").prop('value')).toEqual(undefined);
    });

})

