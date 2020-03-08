import React from 'react';

const DepartmentDropdown = (props:any) => {
    let departments = ["All departments", "Training", "Staging", "QC","Retention", "HR"];
    return (
        <label htmlFor="employees-options"> Select option to filter:
                    <select onChange = {props.change} name="" id="department-options">
                        {
                            departments.length?
                            departments.map((dept:any) => {
                                return (
                                <option key= {dept} value={dept}>{dept}</option>
                                )
                            }) :
                            <option value = "none">No dept available</option>
                        }
                    </select>
        </label>
    );
}

export default DepartmentDropdown;