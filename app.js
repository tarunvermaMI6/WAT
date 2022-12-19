const express = require('express'),
app = express(),
con = require('./app/models/db'),
cors = require('cors'),
router = require('./app/routes');
var corsOption = {
  //  origin : "http://localhost:8080"
}
app.use(cors(corsOption));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));
app.use('/',router);

// setting a port
app.set("port",process.env.PORT || 3000); // either it gets port from env variables or it uses 3000
app.listen(app.get("port"),()=>{
    console.log(`app is running on ${app.get("port")}`);
});