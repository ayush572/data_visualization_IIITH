// console.log(JSON.parse(sessionStorage.getItem('converted_data')));
let session_data;
// session_data.forEach((element)=>{
//   console.log(element);
// })
const geojsondata=[];
var map = L.map('map').setView([21.1500, 79.152195], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// var ids = [];
// function toggle(id){
//   const index = ids.indexOf(id);
//   if (index > -1) { 
//     ids.splice(index, 1);
//     console.log('hello'); 
//     return 0;
//   }
//   else{
//     ids.push(id);
//     console.log(ids);
//     return 0.7;
//   }
// }
function toggle(opac_fill){
  if(opac_fill===0.7)
  {
    return 0;
  }
  else
    return 0.7;
}
var opac = 0.7;
const elements = [{"name":"Number of points in the grid", "id":1}, {"name":"Number of events F", "id":2}, {"name":"Number of events H", "id":3}
, {"name":"Number of events L", "id":4}, {"name":"Number of events P", "id":5}, {"name":"Speed of F", "id":6}, {"name":"Speed of H", "id":7}
, {"name":"Speed of L", "id":8}, {"name":"Speed of P", "id":9}];
function generateList(){
  const ul = document.querySelector('ul');
  elements.forEach((el)=>{
    const div = document.createElement('div');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.innerText = el.name;
    div.classList.add('.options')
    div.appendChild(a);
    a.addEventListener('click',()=>{

      if(el.id===1)
      {
        
        opac = toggle(opac);
        geojsondata.length=0;
        //fetching the data from the data.json file which has been made thourgh the index.js file by using the fs -> file system of nodejs
        //by converting the Grid.csv to session_data
        session_data = JSON.parse(localStorage.getItem('converted_data'));
        session_data.forEach((element)=>{
          // if(`${element.top}`===undefined)
          // {
          //   console.log("id=" + `${element.id}`)
          // }
          // else
          //   console.log(`${element.left}`,`${element.top}`)
          // console.log(`${element.left}`);
          if("left" in element && element['left'].length!=0)
            geojsondata.push({
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                              [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
              },
              "properties": {
                "num_of_points": parseInt(`${element.num_of_points}`),
                "F":parseInt(`${element.F}`),
                "H":parseInt(`${element.H}`),
                "L":parseInt(`${element.L}`),
                "P":parseInt(`${element.P}`),
              }
            });
          
          // else{
          //   console.log(element);
          // } 
          });   
          
            
          function getColor(d) {
            return d > 7 ? '#800026' :
                  d > 6  ? '#BD0026' :
                  d > 5  ? '#E31A1C' :
                  d > 4  ? '#FC4E2A' :
                  d > 3   ? '#FD8D3C' :
                  d > 2   ? '#FEB24C' :
                  d > 1   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.num_of_points),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          console.log(geojsondata);
          L.geoJSON(geojsondata,{style: style}).addTo(map);
      }
      else if(el.id===2)
      {
        geojsondata.length=0;
        session_data = JSON.parse(localStorage.getItem('converted_data'));
        session_data.forEach((element)=>{
          // if(`${element.top}`===undefined)
          // {
          //   console.log("id=" + `${element.id}`)
          // }
          // else
          //   console.log(`${element.left}`,`${element.top}`)
          // console.log(`${element.left}`);
          if("left" in element && element['left'].length!=0)
            geojsondata.push({
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                              [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
              },
              "properties": {
                "num_of_points": parseInt(`${element.num_of_points}`),
                "F":parseInt(`${element.F}`),
                "H":parseInt(`${element.H}`),
                "L":parseInt(`${element.L}`),
                "P":parseInt(`${element.P}`),
              }
            });
          
          // else{
          //   console.log(element);
          // } 
          });   
          
            
          function getColor(d) {
            return d > 7 ? '#800026' :
                  d > 6  ? '#BD0026' :
                  d > 5  ? '#E31A1C' :
                  d > 4  ? '#FC4E2A' :
                  d > 3   ? '#FD8D3C' :
                  d > 2   ? '#FEB24C' :
                  d > 1   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.F),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          console.log(geojsondata);
          L.geoJSON(geojsondata,{style: style}).addTo(map);
      }
      else if(el.id==3)
      {
        geojsondata.length=0;
        session_data = JSON.parse(localStorage.getItem('converted_data'));
        session_data.forEach((element)=>{
          // if(`${element.top}`===undefined)
          // {
          //   console.log("id=" + `${element.id}`)
          // }
          // else
          //   console.log(`${element.left}`,`${element.top}`)
          // console.log(`${element.left}`);
          if("left" in element && element['left'].length!=0)
            geojsondata.push({
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                              [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
              },
              "properties": {
                "num_of_points": parseInt(`${element.num_of_points}`),
                "F":parseInt(`${element.F}`),
                "H":parseInt(`${element.H}`),
                "L":parseInt(`${element.L}`),
                "P":parseInt(`${element.P}`),
              }
            });
          
          // else{
          //   console.log(element);
          // } 
          });   
          
            
          function getColor(d) {
            return d > 7 ? '#800026' :
                  d > 6  ? '#BD0026' :
                  d > 5  ? '#E31A1C' :
                  d > 4  ? '#FC4E2A' :
                  d > 3   ? '#FD8D3C' :
                  d > 2   ? '#FEB24C' :
                  d > 1   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.H),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          console.log(geojsondata);
          L.geoJSON(geojsondata,{style: style}).addTo(map);
      }
      else if(el.id==4)
      {
        session_data = JSON.parse(localStorage.getItem('converted_data'));
        session_data.forEach((element)=>{
          // if(`${element.top}`===undefined)
          // {
          //   console.log("id=" + `${element.id}`)
          // }
          // else
          //   console.log(`${element.left}`,`${element.top}`)
          // console.log(`${element.left}`);
          if("left" in element && element['left'].length!=0)
            geojsondata.push({
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                              [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
              },
              "properties": {
                "num_of_points": parseInt(`${element.num_of_points}`),
                "F":parseInt(`${element.F}`),
                "H":parseInt(`${element.H}`),
                "L":parseInt(`${element.L}`),
                "P":parseInt(`${element.P}`),
              }
            });
          
          // else{
          //   console.log(element);
          // } 
          });   
          
            
          function getColor(d) {
            return d > 7 ? '#800026' :
                  d > 6  ? '#BD0026' :
                  d > 5  ? '#E31A1C' :
                  d > 4  ? '#FC4E2A' :
                  d > 3   ? '#FD8D3C' :
                  d > 2   ? '#FEB24C' :
                  d > 1   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.L),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          console.log(geojsondata);
          L.geoJSON(geojsondata,{style: style}).addTo(map);
      }
      else if(el.id==5)
      {
        geojsondata.length=0;
        session_data = JSON.parse(localStorage.getItem('converted_data'));
        session_data.forEach((element)=>{
          // if(`${element.top}`===undefined)
          // {
          //   console.log("id=" + `${element.id}`)
          // }
          // else
          //   console.log(`${element.left}`,`${element.top}`)
          // console.log(`${element.left}`);
          if("left" in element && element['left'].length!=0)
            geojsondata.push({
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                              [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
              },
              "properties": {
                "num_of_points": parseInt(`${element.num_of_points}`),
                "F":parseInt(`${element.F}`),
                "H":parseInt(`${element.H}`),
                "L":parseInt(`${element.L}`),
                "P":parseInt(`${element.P}`),
              }
            });
          
          // else{
          //   console.log(element);
          // } 
          });   
          
            
          function getColor(d) {
            return d > 7 ? '#800026' :
                  d > 6  ? '#BD0026' :
                  d > 5  ? '#E31A1C' :
                  d > 4  ? '#FC4E2A' :
                  d > 3   ? '#FD8D3C' :
                  d > 2   ? '#FEB24C' :
                  d > 1   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.P),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          console.log(geojsondata);
          L.geoJSON(geojsondata,{style: style}).addTo(map);
      }
      else if(el.id==6)
      {
        geojsondata.length=0;
        session_data = JSON.parse(localStorage.getItem('converted_data'));
        session_data.forEach((element)=>{
          // if(`${element.top}`===undefined)
          // {
          //   console.log("id=" + `${element.id}`)
          // }
          // else
          //   console.log(`${element.left}`,`${element.top}`)
          // console.log(`${element.left}`);
          if("left" in element && element['left'].length!=0)
            geojsondata.push({
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                              [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
              },
              "properties": {
                "num_of_points": parseInt(`${element.num_of_points}`),
                "F":parseInt(`${element.F}`),
                "H":parseInt(`${element.H}`),
                "L":parseInt(`${element.L}`),
                "P":parseInt(`${element.P}`),
              }
            });
          
          // else{
          //   console.log(element);
          // } 
          });   
          
            
          function getColor(d) {
            return d > 7 ? '#800026' :
                  d > 6  ? '#BD0026' :
                  d > 5  ? '#E31A1C' :
                  d > 4  ? '#FC4E2A' :
                  d > 3   ? '#FD8D3C' :
                  d > 2   ? '#FEB24C' :
                  d > 1   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.L),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          console.log(geojsondata);
          L.geoJSON(geojsondata,{style: style}).addTo(map);
      }
      else if(el.id==7)
      {
        geojsondata.length=0;
        session_data = JSON.parse(localStorage.getItem('converted_data'));
        session_data.forEach((element)=>{
          // if(`${element.top}`===undefined)
          // {
          //   console.log("id=" + `${element.id}`)
          // }
          // else
          //   console.log(`${element.left}`,`${element.top}`)
          // console.log(`${element.left}`);
          if("left" in element && element['left'].length!=0)
            geojsondata.push({
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                              [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
              },
              "properties": {
                "num_of_points": parseInt(`${element.num_of_points}`),
                "F":parseInt(`${element.F}`),
                "H":parseInt(`${element.H}`),
                "L":parseInt(`${element.L}`),
                "P":parseInt(`${element.P}`),
              }
            });
          
          // else{
          //   console.log(element);
          // } 
          });   
          
            
          function getColor(d) {
            return d > 7 ? '#800026' :
                  d > 6  ? '#BD0026' :
                  d > 5  ? '#E31A1C' :
                  d > 4  ? '#FC4E2A' :
                  d > 3   ? '#FD8D3C' :
                  d > 2   ? '#FEB24C' :
                  d > 1   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.Event_speed),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          console.log(geojsondata);
          L.geoJSON(geojsondata,{style: style}).addTo(map);
      }
      else if(el.id==8)
      {
        geojsondata.length=0;
        //first the data has been converted from the index.js file and then its json file has been made which is presented on the screen
        fetch("joined_layer.json").then(data=>{
          return data.json();
        }).then(jsondata=>{
          jsondata.forEach(element => {
            if(element.Event === 'L')
            {
              geojsondata.push({
                "type": "Feature",
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                                [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
                },
                "properties": {
                  "Event":`${element.Event}`,
                  "Event_speed": parseInt(`${element.Speed}`),
                }
              });
            }
          });
          function getColor(d) {
            return d > 70 ? '#420C09' :
                  d > 65 ? '#710C04' :
                  d > 60 ? '#800026' :
                  d > 55  ? '#BD0026' :
                  d > 50  ? '#E31A1C' :
                  d > 45  ? '#FC4E2A' :
                  d > 40   ? '#FD8D3C' :
                  d > 35   ? '#FEB24C' :
                  d > 30  ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.Event_speed),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: 0.5
            };
          }

          L.geoJSON(geojsondata,{style: style}).addTo(map);
          
          console.log(geojsondata);
          
        }).catch(err=>{
          console.log(err);
        });
      }
      else if(el.id==9)
      {
        geojsondata.length=0;
        //first the data has been converted from the index.js file and then its json file has been made which is presented on the screen
        fetch("joined_layer.json").then(data=>{
          return data.json();
        }).then(jsondata=>{
          jsondata.forEach(element => {
            if(element.Event === 'P')
            {
              geojsondata.push({
                "type": "Feature",
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [[[parseFloat(`${element.left}`),parseFloat(`${element.top}`)],[parseFloat(`${element.right}`),parseFloat(`${element.top}`)],
                                [parseFloat(`${element.right}`),parseFloat(`${element.bottom}`)],[parseFloat(`${element.left}`),parseFloat(`${element.bottom}`)]]]
                },
                "properties": {
                  "Event":`${element.Event}`,
                  "Event_speed": parseInt(`${element.Speed}`),
                }
              });
            }
          });
          function getColor(d) {
            return d > 70 ? '#420C09' :
                  d > 65 ? '#710C04' :
                  d > 60 ? '#800026' :
                  d > 55  ? '#BD0026' :
                  d > 50  ? '#E31A1C' :
                  d > 45  ? '#FC4E2A' :
                  d > 40   ? '#FD8D3C' :
                  d > 35   ? '#FEB24C' :
                  d > 30   ? '#FED976' :
                              '#FFEDA0';
            }
          function style(feature) {
            return {
                fillColor: getColor(feature.properties.Event_speed),
                weight: 0,
                opacity: 1,
                // color: 'grey',
                // dashArray: '3',
                fillOpacity: toggle(el.id)
            };
          }

          L.geoJSON(geojsondata,{style: style}).addTo(map);
          
          console.log(geojsondata);
          
        }).catch(err=>{
          console.log(err);
        });
      }
  });
    li.appendChild(div);
    ul.appendChild(li);
  })
  
}
generateList();

//not working outside the fetch
// geojsondata.forEach((data)=>{
//   console.log(data);
// });








