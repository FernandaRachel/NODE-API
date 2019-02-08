var mysql = require('mysql');

function createDBConnection() {
    console.log("NODE_ENV:" + process.env.NODE_ENV)
    if (process.env.NODE_ENV == 'test') {
        console.log('ENVIRONMENT: ' + process.env.NODE_ENV);
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs'
        });
    } else if (process.env.NODE_ENV == 'production') {
        console.log('ENVIRONMENT = PRODUCTION');
        var urlConnection = process.env.CLEARDB_DATABASE_URL;
        if (urlConnection !== undefined)
            urlConnection.match(/mysql\/\/:(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        console.log(urlConnection);
        return mysql.createConnection({
            host: 'us-cdbr-iron-east-01.cleardb.net',
            user: 'baeb0fef388601',
            password: 'fa0d392c',
            database: 'heroku_34c4635dd4f66fd'
        });
        /*
        git push heroku master
        */
    }
}

//Wrapper
module.exports = function () {
    return createDBConnection;
}