export const filterFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        let employees = mainData["Employee"];
        let buildings = [mainData["building"]];
        let filteredResources;
        if (searchTerm.length > 0) {
            filteredResources = employees.filter((employee: any) => {
                return employee["firstName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
            buildings.filter(building => {
                if (building["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(building);
                };
            });
        }
        return filteredResources;
    }
}