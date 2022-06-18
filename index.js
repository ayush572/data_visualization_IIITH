// const geojsondata = require('./app');
const fs = require('fs');
const CSVToJSON = require('csvtojson');
CSVToJSON().fromFile("./Grid.csv").then(source=>{
    fs.writeFile('./data.json',JSON.stringify(source),err=>{
        console.log(err);
    });
})  
// fs.writeFile('./griddata.json',JSON.stringify(somedata),err=>{
    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     else{
    //         console.log(somedata);
    //     }
    // })


