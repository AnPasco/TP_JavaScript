//Créer WebSocket connection
var socket = new WebSocket("ws://127.0.0.1:8080/chat?pseudo=Pasco", "http");

//Ouvrir la connection
socket.addEventListener('open', function (event) {
    console.log('Hello Server!');
});