export const filterCampusFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        let filteredResources:any = [];
        let buildings = mainData["buildings"];
        console.log(buildings);
        if (searchTerm.length > 0) {
            buildings.filter((building:any) => {
                if (building["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || building["trainingLead"]["firstName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || building["trainingLead"]["lastName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(building);
                    console.log(building);
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