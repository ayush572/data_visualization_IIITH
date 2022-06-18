const geojsondata=[];
var map = L.map('map').setView([21.2000, 79.302195], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

const elements = ["element 1", "element 2", "element 3"];
function generateList(){
  const ul = document.querySelector('ul');
  elements.forEach((el)=>{
    const div = document.createElement('div');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.innerText = el;
    // const div = document.querySelector('div');
    div.classList.add('.options')
    div.appendChild(a);
    li.appendChild(div);
    ul.appendChild(li);
  })
  
}
generateList();

function selectLayer(){
  document.querySelector('li').addEventListener('click',(event)=>{
    alert(event.target);
  })
  document.querySelector('li').addEventListener('click',(event)=>{
    alert(event.target);
  })
}
selectLayer();

//fetching the data from the data.json file which has been made thourhg the index.js file by using the fs -> file system of nodejs
//by converting the Grid.csv to data.json
fetch("./data.json").then(data=>{
    return data.json();
}).then(jsondata=>{
    jsondata.forEach(element => {
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
    });
    function getColor(d) {
      return d > 70 ? '#800026' :
             d > 60  ? '#BD0026' :
             d > 50  ? '#E31A1C' :
             d > 40  ? '#FC4E2A' :
             d > 30   ? '#FD8D3C' :
             d > 20   ? '#FEB24C' :
             d > 10   ? '#FED976' :
                        '#FFEDA0';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.num_of_points),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

    L.geoJSON(geojsondata,{style: style}).addTo(map);
    console.log(geojsondata);
    
}).catch(err=>{
    console.log(err);
});

//not working outside the fetch
// geojsondata.forEach((data)=>{
//   console.log(data);
// });








