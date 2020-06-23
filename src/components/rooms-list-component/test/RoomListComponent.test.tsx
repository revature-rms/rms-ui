import RoomListComponent from '../RoomListComponent'
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';

jest.mock('mocking get functions for campus buildings, and rooms', () => {
    return {
       getCampusByOwnerId: jest.fn(),
       getBuildingByOwnerId: jest.fn(),
       getRoomByOwnerId: jest.fn(),
        
    }
})