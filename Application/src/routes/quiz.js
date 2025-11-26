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

router.get("/buscarTotalPontos/:idUsuario", function (req, res) {
    quizController.buscarTotalPontos(req, res);
});

router.get("/buscarMaxPontos/:idUsuario", function (req, res) {
    quizController.buscarMaxPontos(req, res);
});
router.post('/grafico', function (req, res){
    quizController.grafico(req, res)
});

//put = atualizar 
router.put("/sortear", function(req, res){
    quizController.sortear(req,res)

})


module.exports = router;