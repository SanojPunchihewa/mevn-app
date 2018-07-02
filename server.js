var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./api/routes/todoRoutes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');    
})

mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Error in MongoDB ' + err);   
    } 
})

const PORT = 3000;

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '/public')));

//  Use routes defined in Route.js and prefix it with api
app.use('/api', route);

app.use(function (req, res, next) {
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + PORT)

    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Pass to next layer of middleware
  next()
})

var paths = ['/', '/dashboard', '/register/<params here>']; // Need to pass params with /regsiter

app.get(paths, (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html')
})
 
app.listen(PORT, ()=>{
    console.log('Server started at PORT:' + PORT);
});
