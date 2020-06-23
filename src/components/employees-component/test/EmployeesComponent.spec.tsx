import React from 'react';
import EmployeesComponent, { IEmployeesProps } from '../EmployeesComponent'
import { shallow, configure, mount } from 'enzyme';
import MaterialTable from 'material-table';
import * as mockRemote from '../../../remote/employee-service';
import { useHistory } from 'react-router-dom';
import { AppUser } from '../../../dtos/appUser';
/*
WHAT WE EXPECT THIS COMPONENT TO DO: 
- to get employees props and make a table out of employees json.
- to not make a table (make a table with one row containing .... no data available) when the employees props is null.
- to wrap all children in a component called wrapper with title attribute called "employees"
- If an id is clicked, it should be grabbed an states updated with that id. 
Also, we should be directed to employee-details component 

*/

jest.mock('../../../remote/employee-service', () => {

    return {
        getAllEmployees: jest.fn(),
        getAllEmployeeById: jest.fn()
    };
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

// var with initial states
const props: IEmployeesProps = {
    currentUser: new AppUser(1, "username", "password", 1, ['Admin', 'Trainer', 'Building Manager', 'Training Site Manager'])
};


const employeesComponent = <EmployeesComponent {...props} />

// main test
describe('EmployeesComponent', () => {

    it('Should render', () => {
        const wrapper = shallow(employeesComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 1 MaterialTable', () => {
        const wrapper = mount(employeesComponent);
        expect(wrapper.find(MaterialTable)).toHaveLength(1)
    })

    it('Should call getAllEmployees on mount', () => {
        const wrapper = mount(employeesComponent);
        expect(mockRemote.getAllEmployees).toHaveBeenCalled()
    })

    it('Should call history on row click', () => {
        const wrapper = mount(employeesComponent);

        // console.log(wrapper.find(MaterialTable).find(`button`).at(0).html());
        // console.log(wrapper.find(MaterialTable).find(`button`).at(1).html());
        // console.log(wrapper.find(MaterialTable).find(`button`).at(2).html());
        // console.log(wrapper.find(MaterialTable).find(`button`).at(3).html());
        // console.log(wrapper.find(MaterialTable).find(`button`).at(4).html());

        wrapper.find(MaterialTable).find(`button`).at(2).simulate(`click`, {});
        //Can't figure out how to target push invocation from useHistory
        //expect(useHistory).toHaveBeenCalled()
    })

    it('Should call getAllEmployees when supplied with an admin role', () => {
        //Default role is Admin
        //Anything below the remote API call does not seem to get coverage
        const wrapper = mount(employeesComponent);
        expect(mockRemote.getAllEmployees).toHaveBeenCalled()
    })

    it('Should call getAllEmployeesById', () => {
        //Need to make new props to simulate a different role
        //Anything below the remote API call does not seem to get coverage
        const tempProps: IEmployeesProps = {
            currentUser: new AppUser(1, "username", "password", 1, ['Trainer', 'Building Manager', 'Training Site Manager'])
        };
        const tempEmployeesComponent = <EmployeesComponent {...tempProps} />
        const wrapper = mount(tempEmployeesComponent);
        expect(mockRemote.getAllEmployeeById).toHaveBeenCalled()
    })

})

