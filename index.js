var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('send:message', "SemaBot: a new user just connected");
  socket.on('send:message', function(msg){
    socket.broadcast.emit('send:message', msg)
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
