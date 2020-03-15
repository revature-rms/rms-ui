export const sortRoomFunction = (sortType:any,element:any) => {
    if (sortType === 'ascending') {
        let sortedElements = element.sort((a:any, b:any): any => {
            if (a.roomNumber < b.roomNumber) { return -1; }
            if (a.roomNumber > b.roomNumber) { return 1; }
        })
        return sortedElements;
    }
    else if (sortType === 'descending') {
        let sortedElements = element.sort((a:any, b:any): any => {
            if (a.roomNumber < b.roomNumber) { return 1; }
            if (a.roomNumber > b.roomNumber) { return -1; }
        })
        return sortedElements;
    }
}