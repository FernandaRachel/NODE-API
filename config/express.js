var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');
var expressValidator = require('express-validator');
module.exports = function () {
    var app = express();

    // -- Configuring body-parser
    // support json encoded bodies
    app.use(bodyParser.json());
    // support encoded bodies
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(expressValidator());

    // -- Configuring express
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    console.log('config called');

    load('routes', {
            cwd: 'app'
        })
        .then('infra')
        .then('validation')
        .into(app);

    return app;
}