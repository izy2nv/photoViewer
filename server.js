var express = require('express');
var mongoose = require('mongoose'); // for mongoDB(not meant for imageViewerApp)

var app = express();
var port = process.env.PORT || 8888;

app.use(express.static(__dirname + "/"));
console.log("directory: "+ __dirname);

app.listen(port, function(){
  console.log('Server running app on port: '+ port);
});
