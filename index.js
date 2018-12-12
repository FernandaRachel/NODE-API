var app = require('./config/express')();
var http = require('http').Server(app);
var socketIo = require('socket.io')(http);

app.set('io', socketIo);

http.listen(3000, function () {
    console.log("Servidor rodando");
})