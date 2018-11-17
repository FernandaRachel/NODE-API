module.exports = function (app) {
    var connection = {};
    var produtosDAO = {};
    console.log('ROTA PRODUTO OK');

    app.get('/produtos', function (req, res) {
        connection = app.infra.connectionFactory();
        produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.lista(function (erros, resultados) {
            if (erros)
                res.send(erros);
            res.send(resultados);
        });
        connection.end();
    });

    app.post('/produtos', function (req, res) {
        connection = app.infra.connectionFactory();
        produtosDAO = app.infra.produtosDAO(connection);
        produtosDAO.createProdutoModel(req.body);

        produtosDAO.insert(connection, request, function (erros, resultados) {
            console.log(req);
            res.send(req);
        });

        connection.end();
    });
}