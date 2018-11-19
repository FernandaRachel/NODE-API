module.exports = function (app) {
    var connection = {};
    var productsDAO = {};
    console.log("ROTA PRODUTO OK");

    app.get("/produtos", function (req, res) {
        connection = app.infra.connectionFactory();
        productsDAO = new app.infra.productsDAO(connection);

        productsDAO.get(function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.format({
                    //   html: function() {
                    //     res.render("produtos/lista", {
                    //       lista: resultados
                    //     });
                    //   },
                    json: function () {
                        res.json(resultados);
                    }
                });
            }
        });
        connection.end();
    });

    app.get("/produtos/(:id)", function (req, res) {
        connection = app.infra.connectionFactory();
        productsDAO = new app.infra.productsDAO(connection);

        productsDAO.getById(req.params.id, function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.format({
                    //   html: function() {
                    //     res.render("produtos/lista", {
                    //       lista: resultados
                    //     });
                    //   },
                    json: function () {
                        res.json(resultados);
                    }
                });
            }
        });
        connection.end();
    });


    app.post("/produtos", function (req, res) {
        connection = app.infra.connectionFactory();
        productsDAO = new app.infra.productsDAO(connection);
        var errors = app.validation.productsValidation(req);

        if (errors) {
            res.format({
                json: function () {
                    return res.status(400).json(errors);
                }
            });
        } else {
            productsDAO.insert(req.body, function (erros, resultados) {
                if (erros) res.status(500).send(erros);
                res.send(req.body);
            });
        }

        connection.end();
    });

    app.put("/produtos/(:id)", function (req, res) {
        connection = app.infra.connectionFactory();
        productsDAO = new app.infra.productsDAO(connection);
        var errors = app.validation.productsValidation(req);

        if (errors) {
            res.format({
                json: function () {
                    return res.status(400).json(errors);
                }
            });
        } else {
            productsDAO.update(req.params.id, req.body, function (erros, resultados) {
                if (erros) res.status(500).send(erros);
                res.send({
                    message: 'Produto atualizado com sucesso !!!'
                });
            });
        }

        connection.end();
    });

    app.delete("/produtos/(:id)", function (req, res) {
        connection = app.infra.connectionFactory();
        productsDAO = new app.infra.productsDAO(connection);
        console.log(req.params);

        productsDAO.delete(req.params.id, function (erros, resultados) {
            if (erros) res.json(erros);
            res.send({
                message: 'Produto deletado com sucesso !!!'
            });
        });

        connection.end();
    });
};