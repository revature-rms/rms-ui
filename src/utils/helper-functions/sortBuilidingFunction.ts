export const sortBuildingFunction = (sortType:any,element:any) => {
    if (sortType === 'ascending') {
        let sortedElements = element.sort((a:any, b:any): any => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
        })
        return sortedElements;
    }
    else if (sortType === 'descending') {
        let sortedElements = element.sort((a:any, b:any): any => {
            if (a.name < b.name) { return 1; }
            if (a.name > b.name) { return -1; }
        })
        return sortedElements;
    }
}