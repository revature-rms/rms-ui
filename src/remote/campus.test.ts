import {getAllcampusAPI} from './campus';
// import {getcampusByIdAPI} from './campus';


test('Testing if data is coming back from axios request', async () => {
    let data:any = await getAllcampusAPI();
    expect(data.length).not.toBe(0);
});

// test('Testing if data is coming back from axios request', async () => {
//     let data:any = await getcampusByIdAPI(1);
//     expect(data.length).not.toBe(0);
// });

// test('Should be undefined due to there being no async/await',  () => {
//     let data:any =  allData();
//     expect(data.length).toBeUndefined();
// });

