import RoomListComponent, { IRoomListProps} from '../RoomListComponent'
import { shallow, mount } from 'enzyme';
import React from 'react';
import * as mockRemote from '../../../remote/search-service';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import { AppUser } from '../../../dtos/appUser';
import MaterialTable from 'material-table';

jest.mock('../../../remote/search-service', () => {
    return {
       findAllRooms: jest.fn(),
       findAllRoomByOwner: jest.fn(),
       findAllCampusesByOwner: jest.fn(),
       findBuildingByOwner: jest.fn()
    }
})

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

const adminProps: IRoomListProps = {
    currentUser: new AppUser(0, '', '', 0, ['Admin'])
}
const tsmProps: IRoomListProps = {
    currentUser: new AppUser(0, '', '', 0, ['Training Site Manager'])
}
const bmProps: IRoomListProps = {
    currentUser: new AppUser(0, '', '', 0, ['Building Manager'])
}
const trainerProps: IRoomListProps = {
    currentUser: new AppUser(0, '', '', 0, ['Trainer'])
}

const adminRoomListComponent = <RoomListComponent {...adminProps}/>
const tsmRoomListComponent = <RoomListComponent {...tsmProps}/>
const bmRoomListComponent = <RoomListComponent {...bmProps}/>
const trainerRoomListComponent = <RoomListComponent {...trainerProps}/>

describe('RoomListComponent for Admin roll', () => {
    let wrapper = mount(adminRoomListComponent);

    it('Should render shallowly', () => {
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 1 material table', () => {
        expect(wrapper.find(MaterialTable)).toHaveLength(1)
    })

    it('Should call findAllRooms on mount', () => {
        expect(mockRemote.findAllRooms).toHaveBeenCalled()
    })
})

describe('RoomListComponent for TSM role', () => {
    let wrapper = mount(tsmRoomListComponent);

    it('Should call findAllCampusesByOwner', () => {
        expect(mockRemote.findAllCampusesByOwner).toHaveBeenCalled()
    })
})

describe('RoomListComponent for BM role', () => {
    let wrapper = mount(bmRoomListComponent);

    it('Should call findBuildingByOwner', () => {
        expect(mockRemote.findBuildingByOwner).toHaveBeenCalled()
    })
})

describe('RoomListComponent for trainer role', () => {
    let wrapper = mount(trainerRoomListComponent);

    it('Should call findAllRoomByOwner', () => {
        expect(mockRemote.findAllRoomByOwner).toHaveBeenCalled()
    })
})