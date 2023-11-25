var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require ('url');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/teste', function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end('{"mensagem" : "Requisicion deu certo"}');
});

app.get('/dados', function(req, res){
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end('['
    +'{"vendedor" : "fulano", "valorVendido" : 1000.0},'
    +'{"vendedor" : "beltrano", "valorVendido" : 100.0},'
    +'{"vendedor" : "ciclano", "valorVendido" : 5000.0},'
    +']')
});

var server = app.listen(3000, function () {
    var host = server.address().address;
});

