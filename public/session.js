var file;
var save;
document.querySelector('#file').addEventListener("change",(event)=>{
    
    const reader = new FileReader();
    reader.onload = handleFileRead;
        file = event.target.files[0];

        //this converts or reads the csv file to the string format
        reader.readAsText(file); // fires onload when done.
        function handleFileRead(event) {
            save = event.target.result;
            
            // console.log(save) // {hp: 32, maxHp: 50, mp: 11, maxMp: 23}
            // sessionStorage.setItem('document', save);
            console.log('done!');
        }
})
document.querySelector('form').addEventListener("submit",async (event)=>{
    
    event.preventDefault();
    // console.log(JSON.parse(JSON.stringify(localStorage.getItem('document'))));
    console.log('hello');
    var data = new FormData()

    //csv file
    data.append('file', file)

    //manually we are uploading the data on the server and then we will be fetching the same
    //as it was not being possible to get the json data directly when the form was getting posted

    //we need to pass a csv file here nut not the data inside it.
    let response = await fetch('http://localhost:3000/',{method: "POST",body: data})
    
    let data_json = await response.json();
    localStorage.setItem('converted_data',JSON.stringify(data_json));
    console.log(data_json);
    window.location.href = 'http://localhost:3000/map.html';
})

    