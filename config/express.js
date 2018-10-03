module.exports = function () {
    var app = require('express')();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.set(require('../app/routes/produtos'))
    console.log('config called');

    return app;
}