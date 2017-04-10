var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var userConnected = JSON.stringify({user: "SemaBot", message: "a new user just joined"});
  var userDisconnected = JSON.stringify({user: "SemaBot", message: "a user just left"});
  
  io.emit('send:message', userConnected);

  socket.on('send:message', function(msg){
    socket.broadcast.emit('send:message', msg)
  });

  socket.on('disconnect', function(){
    io.emit('send:message', userDisconnected);
  });

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
