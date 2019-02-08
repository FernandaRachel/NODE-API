module.exports = function (app) {
    var connection = {};
    var productsDAO = {};
    console.log("ROTA PRODUTOS OK");

    app.get("/", function (req, res) {
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);

        productsDAO.get(function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.format({
                    html: function () {
                        res.render('home/index', {
                            livros: resultados
                        });
                    },
                    json: function () {
                        res.json(resultados);
                    }
                });
            }
        });
        connection.end();
    });
}