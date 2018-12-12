var mysql = require('mysql');

function createDBConnection() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs'
        });
    }
}

//Wrapper
module.exports = function () {
    return createDBConnection;
}