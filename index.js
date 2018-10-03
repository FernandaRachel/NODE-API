var app = require('./config/express')();
var rotas = require('./app/routes/produtos')(app);

app.listen(3000, function () {
    console.log("Servidor rodando");
})