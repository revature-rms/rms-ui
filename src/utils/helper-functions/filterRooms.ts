export const filterRoomsFunction = (mainData:any, searchTerm:any) => {
    if (mainData !== null) {
        let filteredResources:any = [];
        let rooms = mainData["rooms"];
        console.log(rooms);
        if (searchTerm.length > 0) {
            rooms.filter((room:any) => {
                if (room["roomNumber"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || room["batch"]["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || room["batch"]["trainer"]["firstName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || room["batch"]["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || room["batch"]["trainer"]["lastName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(room);
                    console.log(room);
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