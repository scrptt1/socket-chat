var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/view/index.html")
})

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.on('send msg', function(msg) {
    socket.broadcast.emit('send chat', msg);
  });
});

server = http.listen(() => {
  console.log('Server listening on port ' + server.address().port);
})