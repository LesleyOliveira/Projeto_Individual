// criação da minha rota pro quiz
var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quizController');

router.get('/historico/:idUsuario', function (req, res){
    quizController.buscarPontuacao(req, res);
});

router.post("/salvar", function (req, res) {
    quizController.salvarPontuacao(req, res);
});

router.post("/buscarTotalPontos", function (req, res) {
    quizController.buscarTotalPontos(req, res);
});

router.post('/grafico', function (req, res){
    quizController.grafico(req, res)
});

module.exports = router;

