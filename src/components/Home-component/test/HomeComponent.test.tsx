<<<<<<< HEAD:src/components/Home-component/HomeComponent.test.tsx
import { HomeComponent } from  './HomeComponent'
=======
import { HomeComponent } from '../HomeComponent';
>>>>>>> 76a33b65efa83749da27fecc48ea48ac24d8ed1d:src/components/Home-component/test/HomeComponent.test.tsx
import { shallow } from 'enzyme';
import React from 'react';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';

const setup = (props = {
    getAllCampuses: () => { }
}, state = 0) => {
    const wrapper = shallow(<HomeComponent {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    //find element with the data-test value
    const appComponent = FindByTestAttr(wrapper, 'main-content');
    expect(appComponent.length).toBe(1);
});

test('map data functionality, should  return undefined', () => {
    const wrapper:any = setup();
    wrapper.setState({
        currentUser: null
    })
    let test = wrapper.instance().mapData();
    expect(test).toBeUndefined();
});