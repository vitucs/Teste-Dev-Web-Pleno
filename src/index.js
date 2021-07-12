//Carregar módulos
const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
//const mongoose = require ('mongoose');=
const app = express();

//Configurações
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    //Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
//Mongoose


// Rotas
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/layout/index.html");
});

app.get("/inicial", function(req, res) {
    res.sendFile(__dirname + "/views/layout/inicial.html");
});

app.get("/poker-face", function(req, res) {
    res.sendFile(__dirname + "/views/layout/poker-face.html");
});

app.get("/triste", function(req, res) {
    res.sendFile(__dirname + "/views/layout/triste.html");
});

app.post("/", function(req, res) {
    res.sendFile(__dirname + "/views/layout/index.html");
});

app.post("/inicial", function(req, res) {
    res.sendFile(__dirname + "/views/layout/inicial.html");
});

app.post("/poker-face", function(req, res) {
    res.sendFile(__dirname + "/views/layout/poker-face.html");
});

app.post("/triste", function(req, res) {
    res.sendFile(__dirname + "/views/layout/triste.html");
});
//Outros
app.listen(8081, function() {
    console.log("Servidor Rodando na Porta 8081.");
});