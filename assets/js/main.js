var socket = io()



$(function() {
  $('#icon').on('click',function(e) {
    var datahr = new Date()

    hr = datahr.toTimeString().substr(0,5)

    e.preventDefault();
    socket.emit('send msg',$('#msg').val(), $('#nome').val());
    $('.msgs').append($('<div id="mensagemenviada">'+
      '</p> <p class="content">'+$('#msg').val()+
      '</p> <p class="hora">'+hr+'</p></div>'));
    $('#msg').val('');
    $('#msg').focus();
    return false;
  });

  $('form').submit(function(e) {
    var datahr = new Date()

    hr = datahr.toTimeString().substr(0,5)

    e.preventDefault();
    socket.emit('send msg',$('#msg').val(), $('#nome').val());
    $('.msgs').append($('<div id="mensagemenviada">'+
      '</p> <p class="content">'+$('#msg').val()+
      '</p> <p class="hora">'+hr+'</p></div>'));
    $('#msg').val('');
    $('#msg').focus();
    
    div = $('.msgs');
      div.prop("scrollTop", div.prop("scrollHeight"));
    return false;
  });

  socket.on('send chat', function(msg, name) {



    var datahr = new Date()

    hr = datahr.toTimeString().substr(0,5)

    $('.msgs').append($('<div id="mensagemrecebida"> <p id="name" class="nome">'+name+
      '</p> <p class="content">'+msg+
      '</p> <p class="hora">'+hr+'</p></div>'));

      div = $('.msgs');
      div.prop("scrollTop", div.prop("scrollHeight"));

  });

   
});