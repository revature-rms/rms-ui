export const sortCampusFunction = (sortType:any,element:any) => {
    //checks sort type
    if (sortType === 'ascending') {
        let sortedElements = element.sort((a:any, b:any): any => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
        })
        return sortedElements;
    }
    //checks sort type
    else if (sortType === 'descending') {
        let sortedElements = element.sort((a:any, b:any): any => {
            if (a.name < b.name) { return 1; }
            if (a.name > b.name) { return -1; }
        })
        return sortedElements;
    }
}