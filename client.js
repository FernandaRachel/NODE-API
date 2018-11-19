var http = require('http');

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

http.get(config, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {

    })
})
