var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
module.exports = function () {
    var app = express();

    // -- configuring statics import
    app.use(express.static('./app/public'));
    // -- Configuring express
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // -- Configuring body-parser
    app.use(bodyParser.json());
    // support json encoded bodies
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(expressValidator());

    console.log('config called');

    load('routes', {
            cwd: 'app'
        })
        .then('infra')
        .then('validation')
        .into(app);

    app.use(function (req, res, next) {
        res.status(404).render('erros/404');
        next();
    });


    app.use(function (error, req, res, next) {
        res.status(500).render('erros/500');
        next();
    });
    return app;
}