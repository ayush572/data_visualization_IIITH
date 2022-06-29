const Papa = require('papaparse');
const bodyParser = require('body-parser');
const express = require('express');
const upload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();

//making the expressjs object
const app = express();
const port = process.env.PORT || 3000;

var uploaded_data;

//express middlewares here
app.use(upload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "secret"
}))
app.use(express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

let stream;
app.post('/', (req,res)=>{

    //header true means the first row of the parsed 
    //csv file will become the keys
    stream = Papa.parse(req.files.file.data.toString(),{header: true});
    res.json(stream.data);
    // res.redirect('/map')
})
app.get('/map',(req,res)=>{
    req.session.user = stream.data;
    req.session.save();     
    uploaded_data=req.session.user;
    // router.get('/',(req,res)=>{
    //     res.send('hello world');
    // })
    console.log(req.session.user);
    res.sendFile(__dirname + '/map.html',({"data":req.session.user}));
})


app.get('/del',(req,res)=>{
    req.session.destroy();
    console.log('session ended');
})
app.listen(port,()=>{
    console.log(`server starting on port ${port}`);
});



