document.querySelector('#file').addEventListener("change",(event)=>{
    
    const reader = new FileReader();
    reader.onload = handleFileRead;
        var file = event.target.files[0];

        //this converts or reads the csv file to the string format
        reader.readAsBinaryString(file); // fires onload when done.
        function handleFileRead(event) {
            var save = event.target.result;
            console.log(save) // {hp: 32, maxHp: 50, mp: 11, maxMp: 23}
            sessionStorage.setItem('document', save);
            console.log('done!');
        }
})
document.querySelector('form').addEventListener("submit",()=>{
    return JSON.parse(localStorage.getItem('document'));
})


    