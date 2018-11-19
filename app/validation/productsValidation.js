function productsValidation(req) {
    req.assert("titulo", "Titulo é obrigatório").notEmpty();
    req.assert("titulo", "Titulo deve conter no máximo 45 caracteres").isLength({
        max: 45
    });
    req.assert("descricao", "Descrição deve conter no máximo 250 caracteres").isLength({
        max: 250
    });
    req.assert("price", "Fromato inválido").isFloat();
    req.assert("price", "Fromato inválido").notEmpty();
    var erros = req.validationErrors();

    // return erros;
    return formatError(erros);
}

function formatError(erros) {
    var errorFormatted = [];
    var obj = {};

    erros.forEach(e => {
        if (!obj[e.param]) {
            obj[e.param] = [];
            obj[e.param].push(e.msg);
        } else {
            obj[e.param].push(e.msg);
        }
    });
    errorFormatted.push(obj);

    return errorFormatted;
}

module.exports = function () {
    return productsValidation;
}