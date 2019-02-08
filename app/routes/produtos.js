module.exports = function (app) {
    var connection = {};
    var productsDAO = {};
    console.log("ROTA PRODUTO OK");

    app.get("/produtos/", function (req, res) {
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);

        productsDAO.get(function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.format({
                    json: function () {
                        res.json(resultados);
                    },
                    html: function () {
                        res.render('produtos/lista', {
                            lista: resultados
                        });
                    }
                });
            }
        });
        connection.end();
    });

    app.get("/produtos/(:id)", function (req, res) {
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);
        var id = '';
        if (req.params.id) id = req.params.id;
        productsDAO.getById(id, function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.format({
                    json: function () {
                        res.json(resultados);
                    },
                    html: function () {
                        res.render('produtos/lista', {
                            lista: resultados
                        });
                    }
                });
                connection.end();
            }
        });
    });

    app.get("/produtos/titulo/(:titulo)", function (req, res) {
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);
        var title = '';
        if (req.params.titulo) title = req.params.titulo.toString();
        console.log(title);

        productsDAO.getByTitle(title, function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.format({
                    json: function () {
                        res.json(resultados);
                    }
                });
            }
        });
        connection.end();
    });

    app.get("/produtos/price/(:price)", function (req, res) {
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);
        var price = '';
        if (req.params.price) price = req.params.price;
        console.log(price);

        productsDAO.getByPrice(price, function (erros, resultados) {
            if (erros) res.send(erros);
            else {
                res.format({
                    json: function () {
                        res.json(resultados);
                    }
                });
            }
        });
        connection.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form', {
            errosValidacao: {},
            produto: {}
        });
    });

    app.post("/produtos", function (req, res) {
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);
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
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);
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
        connection = app.db.connectionFactory();
        productsDAO = new app.db.dao.productsDAO(connection);
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