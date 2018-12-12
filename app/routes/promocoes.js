module.exports = function (app) {
    var connection = {};
    var productsDAO = {};
    console.log("ROTA PROMOCOES OK");

    app.get("/promocoes/form", function (req, res) {
        connection = app.infra.connectionFactory();
        productsDAO = new app.infra.productsDAO(connection);

        productsDAO.get(function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.render('promocoes/form', {
                    lista: resultados
                });
            }
        });
        connection.end();
    });

     app.post("/promocoes", function(req, res) {
        var promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('promocoes/form');
    });
}