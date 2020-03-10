export const filterBuildingsFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        let filteredResources:any = [];
        let buildings = mainData["buildings"];
        console.log(buildings);
        if (searchTerm.length > 0) {
            buildings.filter((building:any) => {
                if (building["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || building["abbrName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(building);
                    console.log(building);
                };
            });
        } 
        else {
            return [];
        }
        console.log(filteredResources);
        return filteredResources;
    }
}