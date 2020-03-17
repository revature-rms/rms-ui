import React from 'react';
import {EmployeesComponent} from '../EmployeesComponent';
import { shallow } from 'enzyme';
import Wrapper from '../../../utils/div-wrapper/Wrapper';
//import { updateId } from '../../../action-mappers/employees-action';

/*
WHAT WE EXPECT THIS COMPONENT TO DO: 
- to get employees props and make a table out of employees json.
- to not make a table (make a table with one row containing .... no data available) when the employees props is null.
- to wrap all children in a component called wrapper with title attribute called "employees"
- If an id is clicked, it should be grabbed an states updated with that id. 
Also, we should be directed to employee-details component 

*/

// var with initial states
const testProps = {
    employees: {Employee: []},
    employeesMessage: '',
    getAllEmployees: () => {},
    updateId: (id:number) => {}


}

// main test
describe('EmployeesComponent', () => {
    it('should be wrapped in <Wrapper/> with title props named as "Employees" whenever called', () => {
        const wrapper = shallow(<EmployeesComponent {... testProps}/>);
        expect(wrapper.find(Wrapper).prop('title')).toBe('Employees');
    });

    it('should make a table when passed with employees props', () => {
        const wrapper = shallow(<EmployeesComponent {... testProps}/>);
        expect(wrapper.contains('table'));
    });

    it('should make a table with one row when employees array is null', () => {
        const wrapper = shallow(<EmployeesComponent {... testProps}/>);
        if(!testProps.employees.Employee.length){
            expect(wrapper.find('tr').length).toBe(1);
        }
    });
    
    it('should grab the id of clicked row to display more details about the employee', () => {
        // assume we have the below data as props with data on emplyees: 
        const newProps = {
            employees: {Employee: [
                {
                    id: 2,
                    firstName: 'Bosco',
                    lastName: 'Nzeyi',
                    email: 'my@email.com',
                    title: 'Boss',
                    department: 'Engineer'
                }
            ]},
            employeesMessage: '',
            getAllEmployees: () => {},
            updateId: (id:number) => {}
        };

        // test whether states changes;
        const wrapper = shallow(<EmployeesComponent {... newProps}/>);
        const idRow = wrapper.find('tr').at(1).children().at(0).simulate('click');
    
        
    })
})