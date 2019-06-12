var socket = io()




$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    socket.emit('send msg', $('#msg').val(), $('#nome').val());
    $('.msgs').append($('<p class="mensagem2">').text($('#msg').val()));
    $('#msg').val('');
    $('#msg').focus();
    return false;
  });

  socket.on('send chat', function(msg, name) {

    var datahr = new Date()

    hr = datahr.toTimeString().substr(0,5)

    $('.msgs').append($('<div id="msgrecebida"> <p id="name" class="mensagem1">'+name+
      '</p> <p class="mensagem1">'+msg+
      '</p> <p class="mensagem1">'+hr+'</p></div>'));

  });
});