export const filterEmployeesFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        let filteredResources:any = [];
        let employee = mainData;
        console.log(employee);
        if (searchTerm.length > 0) {
            employee.filter((employee:any) => {
                if (`${employee["firstName"]} ${employee["lastName"]}`.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(employee);
                    console.log(employee);
                };
            });
        } 
        else {
            return filteredResources;
        }
        console.log(filteredResources);
        return filteredResources;
    }
}