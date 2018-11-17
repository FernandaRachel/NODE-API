function produtosDAO(connection) {
    this._connection = connection;
}

produtosDAO.prototype.createProdutoModel = function (req) {
    const objReq = {
        id: req.id,
        titulo: req.titulo,
        price: req.price,
        descricao: req.descricao
    }

    return objReq;
}

produtosDAO.prototype.lista = function (callback) {
   return this._connection.query('select * from livros', callback);
}

module.exports = function () {
    return produtosDAO;
}

// this.insert = function (connection, post, callback) {
//     connection.query('INSERT INTO posts SET ?', post, callback);
// }
// return this;

