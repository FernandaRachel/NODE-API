function productsValidation(req) {
    req.assert("titulo", "Titulo é obrigatório").notEmpty();
    req.assert("price", "Fromato inválido").isFloat();
    req.assert("price", "Fromato inválido").notEmpty();
    var erros = req.validationErrors();

    return erros;
}

module.exports = function () {
    return productsValidation;
}