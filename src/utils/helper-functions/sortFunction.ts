export const sorter = (sort:any,element:any) => {
    if (sort === true) {
        let sortedElements = element.sort((a:any, b:any): any => {
            if (a.name < b.name) { return 1; }
            if (a.name > b.name) { return -1; }
        })
        return sortedElements;
    }
}