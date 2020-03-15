import { RoomDetailsComponent } from './RoomDetailsComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../utils/helper-functions/testUtils';

let propsData = {
    getTestRoom: () => { },
    room: {
        batch: {
            name: "",
            trainer: {
                firstName: "",
                lastName: ""
            },
            coTrainer: {
                firstName: "",
                lastName: ""
            }
        },
        maxOccupancy: 0,
        resourceMetadata: {
            resourceCreationDateTime: '',
            lastModifiedDateTime: '',
            lastModifier: {
                username: ''
            },
            resourceCreator: {
                username: ''
            },
            resourceOwner: {
                username: ''
            }
        }
    }
}
const setup = (props: any = propsData, state = {visible: false}) => {
    const wrapper = shallow(<RoomDetailsComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders room without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});

