function productsDAO(connection) {
    this._connection = connection;
}

productsDAO.prototype.insert = function (post, callback) {
    return this._connection.query('INSERT INTO livros SET ?', post, callback);
}

productsDAO.prototype.get = function (callback) {
   return this._connection.query('SELECT * FROM livros', callback);
}

productsDAO.prototype.getById = function (id,callback) {
    return this._connection.query('SELECT * FROM livros WHERE id=' + id, callback);
}

productsDAO.prototype.getByTitle = function (title, callback) {
    return this._connection.query('SELECT * FROM livros WHERE titulo like \'%' + title + "%\'", callback);
}

productsDAO.prototype.getByPrice = function (price, callback) {
    return this._connection.query('SELECT * FROM livros WHERE price like \'%' + price + "%\'", callback);
}

productsDAO.prototype.update = function (id, products, callback) {
    return this._connection.query('UPDATE livros SET ? WHERE id=' + id, products, callback);
}

productsDAO.prototype.delete = function (id, callback) {
    return this._connection.query('DELETE FROM livros WHERE id=' + id, callback);
}

module.exports = function () {
    return productsDAO;
}
