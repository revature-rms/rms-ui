export const filterCampusFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        let filteredResources:any = [];
        let campuses = mainData;
        if (searchTerm.length > 0) {
            campuses.filter((campus:any) => {
                if (campus["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(campus);
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