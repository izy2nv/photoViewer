var fs = require('fs');
var data = "My write stream is awesome. Makes sense";
var streamWriter = fs.createWriteStream("write.txt");
var streamReader = fs.createReadStream("mytext.txt");
// streamWriter.write(data, "UTF8");
// streamWriter.end();
// streamWriter.on('finish', function() {
//   console.log("write is complete");
// });
streamReader.pipe(streamWriter);
var zlib = require('zlib');

fs.createReadStream("mytext.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("mytext.txt.gz"));
console.log("file compressed");
// var data = "";
// var readerStream = fs.createReadStream("mytext.txt");
// readerStream.setEncoding("UTF8");
// readerStream.on('data', function(chunk) {
//   data += chunk;
// });
// readerStream.on('end', function() {
//   console.log("DATA: "+ data);
// });
//
// readerStream.on('error', function (err){
//   console.log(err.stack);
// });

//BLOCKING EXECUTION
// var data = fs.readFileSync('mytext.txt');
// console.log(data.toString());
// console.log('program ended');
//***end of blocking***

// //NON-BLOCKING EXECUTION
// fs.readFile("mytext.txt", function(err, data){
//   if (err) return;
//   console.log(data.toString());
// });
//
// console.log("program ended");

//**end of non-blobking****

//nodejs uses the events and eventEmitter class to bind events to their handlers
//
// var events = require('events'); // import events module
// var eventEmitter = events.EventEmitter(); //create an eventEmitter obj
//
// // GENERAL DEFINITION: Bind event and event handler as follows
// // eventEmitter.on('event', eventHandler);
//
// //create an event Handler called connectHandler for example
// var connectHandler = function connected(){
//   console.log('connection successful');
//   eventEmitter.emit('data_received');
// };
//
// //implementation of eventEmitter.emit
// eventEmitter.emit('connection');
//
// eventEmitter.on('data_received', function(){
//   console.log('DATA RECEIVED SUCCESSFULLY');
// });
//
// //implementation of eventEmitter binding connection event an connecthandler
// eventEmitter.on('connection', connectHandler);
//
// //GENERAL DEFINITION: eventEmitter.emit
// // eventEmitter.emit('eventName'); //fire an event
//
// console.log('program ended');

// Import events module
// var events = require('events');
// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();
//
// // Create an event handler as follows
// var connectHandler = function connected() {
//    console.log('connection succesful.');
//
//    // Fire the data_received event
//    eventEmitter.emit('data_received');
// };
//
// // Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);
//
// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function(){
//    console.log('data received succesfully.');
// });
//
// // Fire the connection event
// eventEmitter.emit('connection');
// console.log(eventEmitter.listenerCount("connection"));
//
// var buf = new Buffer('Simply Easy Learning');
//
// console.log(buf.toJSON());

console.log("Program Ended.");
