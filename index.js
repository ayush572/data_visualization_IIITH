// const geojsondata = require('./app');
const fs = require('fs');
const CSVToJSON = require('csvtojson');
const express = require('express');
const upload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const exp = require('constants');


//making the expressjs object
const app = express();
const port = process.env.PORT || 3000;

//express middlewares here
app.use(upload());
app.use(cookieParser());
app.use(express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})




app.post('/', (req,res)=>{
    
    res.redirect('/map');
    // console.log(req.files);
    const file = req.files.file;
    // console.log(JSON.parse(file.data.toString('utf-8')));
    var str = file.data.toString();
    console.log(str[0]);
    // console.log(res.cookie('hello','12345'));
    // console.log(file.);
    // var data = JSON.stringify(file.data);
    // var parsed_data = JSON.parse(data);
    // console.log(JSON.parse(data));
    // res.send(parsed_data);
    
    // var jsondata = data.toJSON();
    // console.log(jsondata);
    // // jsondata.array.forEach(element => {
    //   console.log(element)
    // })
    // CSVToJSON().fromFile(file).then(source=>{
    //     fs.writeFile('./public/some_file.json',JSON.stringify(source),err=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             console.log('file uploaded and converted');
    //         }
    //     });
    // })  
})
app.get('/map',(req,res)=>{
    res.sendFile(__dirname + '/map.html');
})

app.listen(port,()=>{
    console.log(`server starting on port ${port}`);
});

//reading the data from the csv and converting it to the json format


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



