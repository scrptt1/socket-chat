var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + "/assets"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/view/index.html")
})

io.on('connection', function(socket) {
  socket.on('send msg', function(msg, name) {
    socket.broadcast.emit('send chat', msg, name);
  });
});

server = http.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port ' + server.address().port);
})