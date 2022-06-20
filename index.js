// const geojsondata = require('./app');
const fs = require('fs');
const CSVToJSON = require('csvtojson');

//reading the data from the json and converting it to the csv format
CSVToJSON().fromFile("./Joined layer.csv").then(source=>{
    fs.writeFile('./joined_layer.json',JSON.stringify(source),err=>{
        console.log(err);
    });
})  

//using the file system here to read and write the files for the json file
// fs.readFile('./data.json',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         var geojsondata = [];
//         const jsondata = JSON.parse(data);
//         jsondata.forEach(element => {
//             geojsondata.push({
//                 "type": "Feature",
//                 "geometry": {
//                   "type": "Polygon",
//                   "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
//                                 [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
//                 },
//                 "properties": {
//                   "num_of_points": parseInt(`${element.num_of_points}`),
//                   "F":parseInt(`${element.F}`),
//                   "H":parseInt(`${element.H}`),
//                   "L":parseInt(`${element.L}`),
//                   "P":parseInt(`${element.P}`),
//                 }
//               });
//         });
//         console.log(jsondata);
//         fs.writeFile('./griddata.json',JSON.stringify(geojsondata),err=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else{
//                 console.log(geojsondata);
//             }
//         })
//     }
// })



