var app = require('./config/express')();
var http = require('http').Server(app);
var socketIo = require('socket.io')(http);

app.set('io', socketIo);

var porta = process.env.PORT || 3000;
console.log('PORTA: %s', porta)
http.listen(porta, function () {
    console.log("Servidor rodando");
})

// var server = http.listen(porta, function () {

//     var host = server.address().address;
//     var port = server.address().port;

//     console.log('Example app listening at http://%s:%s', host, port);
// });