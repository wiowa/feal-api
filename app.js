// Requiring express for routing
const https = require("https");
const express = require('express')
const fs = require('fs')

// Creating app from express
const app = express()

https
  .createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  }, app)
  .listen(443, ()=>{
    console.log('server is runing at port 443')
  });
  
// Requiring in-built file system
  
// GET request to the root of the app
app.get('/',function(req,res){
  
    // Sending index.html file for GET request
    // to the root of the app
    res.sendFile(__dirname+'/index.html')
})
  
// Creating server at port 3000
app.listen(80,function(req,res){
    console.log('Server started at 80')
})