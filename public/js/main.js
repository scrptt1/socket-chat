var socket = io()

var ordem = 1;

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    socket.emit('send msg', $('#nome').val() + ": " + $('#msg').val());
    $('.msgs').append($('<p>').text(ordem + "-eu: " + $('#msg').val()));
    ordem++;
    $('#msg').val('');
    $('#msg').focus();
    return false;
  });
  socket.on('send chat', function(msg) {
    $('.msgs2').append($('<p>').text(ordem + "-" + msg));
    ordem++;
  });
});