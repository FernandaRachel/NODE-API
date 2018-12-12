var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function () {

    beforeEach(function (done) {
        var conn = express.infra.connectionFactory();
        conn.query('delete from produtos', function (ex, result) {
            if (!ex)
                done();
        })
    })
    it('#listagem json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        console.log('teste de verificacao de listagem json');
    });

    it("#cadastro de novo produto json", function (done) {
        var prod = {
            titulo: 'Teste Mocha',
            descricao: 'Teste Mocha',
            price: 22.5
        }
        request.post("/produtos")
            .send(prod)
            .expect(200, done);
        console.log("teste de verificacao de listagem json");
    });
});