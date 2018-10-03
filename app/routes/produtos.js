module.exports = function (app) {

    app.get('/produtos', function (req, res) {
        console.log("some product");
        
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', function (err, results) {
            res.send(results);
        });
        connection.end();

        // res.send('<html>Listando...</html>');
        res.render('produtos/lista');
    })
}