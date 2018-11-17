var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}

//Wrapper
module.exports = function() {
    // if(createDBConnection)
    return createDBConnection;
}