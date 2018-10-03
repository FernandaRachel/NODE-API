var app = require('./config/express')();
var rotas = require('./app/routes/produtos')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${PORT}`);
})