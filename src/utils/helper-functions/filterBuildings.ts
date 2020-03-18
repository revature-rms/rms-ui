export const filterBuildingsFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        //array that will hold resources
        let filteredResources:any = [];
        //data to be filtered
        let buildings = mainData["buildings"];
        if (searchTerm.length > 0) {
            buildings.filter((building:any) => {
                //only accept buildings whose name and trainer's name include the search term
                if (building["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || `${building["trainingLead"]["firstName"]} ${building["trainingLead"]["lastName"]}`.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(building);
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