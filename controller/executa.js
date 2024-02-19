const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { nota1, nota2 } = req.body;
    const media = Calculadora.Media(
        parseFloat(nota1), parseFloat(nota2));
    res.redirect(`/resultado.html?media=${media}`);
    //res.send(`A média das notas é: ${media}`);
});

module.exports = resultado;