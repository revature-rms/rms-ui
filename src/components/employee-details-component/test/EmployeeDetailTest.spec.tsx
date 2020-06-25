import React from 'react';
import {IEmployeeDetailsProps, EmployeeDetailsComponent} from '../EmployeeDetailsComponent'
import { shallow, configure, mount } from 'enzyme';
import { FindByTestAttr } from '../../../utils/helper-functions/testUtils';
import * as mockRemote from '../../../remote/search-service';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Input, Button } from '@material-ui/core';
import { AppUser } from '../../../dtos/appUser';
import MaterialTable from 'material-table';


configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../../remote/search-service', ()=>{
	return {
		findEmployeeById: jest.fn()
	};
});

jest.mock('react-router-dom',()=>({
	useHistory: ()=>({
		push: jest.fn(),
	}),
}));

beforeEach(()=>{
	(mockRemote.findEmployeeById as jest.Mock).mockClear();
})

afterEach(()=>{
	jest.clearAllMocks();
});

const props: IEmployeeDetailsProps = {

}

const employeeDetailsComponent = <EmployeeDetailsComponent {...props} />

describe('EmployeeDetailsComponent', ()=>{
	const setState = jest.fn();
	const useStateMock: any = (init: any)=>[init, setState];

	it('Should render', ()=>{
		const wrapper = shallow(employeeDetailsComponent);
	})

	it('Should render 9 FormControls',()=>{
		const wrapper = mount(employeeDetailsComponent);
		expect(wrapper.find(FormControl)).toHaveLength(10)
	})

	it('Should render 25 Divs', () => {
        const wrapper = mount(employeeDetailsComponent);
        expect(wrapper.find("div")).toHaveLength(25)
	})


	it('Typing into input.firstName trigger state hook on firstName', () => {
        let wrapper = mount(employeeDetailsComponent);

        // Hit enable editing button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#firstName").simulate('change', {
            target: { 
                id: 'firstName',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#firstName")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#firstName").prop('value')).toEqual('foo');
	});

	it('Typing into input.lastName trigger state hook on name', () => {
        let wrapper = mount(employeeDetailsComponent);

        // Hit enable editing button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#lastName").simulate('change', {
            target: { 
                id: 'lastName',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#lastName")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#lastName").prop('value')).toEqual('foo');
	});

	it('Typing into input.email trigger state hook on email', () => {
        let wrapper = mount(employeeDetailsComponent);

        // Hit enable editing button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#email").simulate('change', {
            target: { 
                id: 'email',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#email")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#email").prop('value')).toEqual('foo');
	});

	it('Typing into input.title trigger state hook on title', () => {
        let wrapper = mount(employeeDetailsComponent);

        // Hit enable editing button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#title").simulate('change', {
            target: { 
                id: 'title',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#title")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#title").prop('value')).toEqual('foo');
	});

	it('Typing into input.department trigger state hook on department', () => {
        let wrapper = mount(employeeDetailsComponent);

        // Hit enable editing button
        wrapper.find(Button).simulate(`click`, {});

        // Edit values
        /* note, since material-UI is a wrapper for basic HTML, you need to
           target the native HTML inside of the material-UI "wrapper".
         */ 
        wrapper.find(Input).find("input#department").simulate('change', {
            target: { 
                id: 'department',
                value: 'foo' 
            }
        });

        // Persist values
        wrapper.find(Button).at(0).simulate(`click`, {});

        // Check that values were persisted
        expect(wrapper.find(Input).find("input#department")).toHaveLength(1);
        expect(wrapper.find(Input).find("input#department").prop('value')).toEqual('foo');
	});
	

})