import { RoomListComponent } from '../RoomListComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';

let propsData = {
    getAllProps: () => { },
    getAllRooms: () => { },
    building: {
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
const setup = (props: any = propsData, state = 0) => {
    const wrapper = shallow(<RoomListComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders room without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});

test('map rooms', () => {
    const wrapper:any = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'mapRooms');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('map rooms', () => {
    const wrapper:any = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'makeTable');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('map amenities', () => {
    const wrapper:any = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'mapAmenities');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});

test('Make lists', () => {
    const wrapper:any = setup();
    const FakeFun = jest.spyOn(wrapper.instance(), 'makeList');
    wrapper.instance().render();
    expect(FakeFun).toHaveBeenCalled();
});
