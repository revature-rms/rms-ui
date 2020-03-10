export const filterFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        let employees = mainData["Employee"];
        let buildings = [mainData["building"]];
        let campuses = mainData["campus"];
        console.log(campuses);
        let filteredResources;
        if (searchTerm.length > 0) {
            filteredResources = employees.filter((employee: any) => {
                return employee["firstName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
            buildings.filter(building => {
                if (building["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || building["abbrName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(building);
                };
            });
            campuses.filter((campus:any) => {
                if (campus["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || campus["abbrName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(campus);
                };
            });
        }
        return filteredResources;
    }
}