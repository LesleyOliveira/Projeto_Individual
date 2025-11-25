const quizModel = require('../models/quizModel');

function salvarPontuacao(req, res) {
    var pontos = req.body.pontuacaoFinal;
    var fkUsuario = req.body.fkUsuario;

    if (pontos == undefined || fkUsuario == undefined) {
        res.status(400).send("não foi possivel salvar pois falta dados");
    } else {
        quizModel.salvarPontuacao(pontos, fkUsuario)
            .then(function (resultado) {
                res.status(200).json({ mensagem: "Pontuação salva!", resultado });
            })
            .catch(function (erro) {
                console.log("Erro ao salvar pontuação:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function historico(req, res) {
    const idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        return res.status(400).json({ mensagem: "o ID do usuário não foi informmado" });
    }
    quizModel.obterHistorico(idUsuario)
        .then(function (resposta) {
            res.status(200).send(resposta)
        }).catch(function (erro) {
            console.error("Erro ao obter histórico: ", erro);
            res.status(500).json({ mensagem: "Erro no servidor", erro: erro });
        })
    if (!result || result.length === 0) {
        return res.status(204).send();
    }
    res.status(200).json(result);
}
function grafico(req, res) {
    var id = req.body.idUsuarioServer
    quizModel.obterHistorico(id)
        .then(function (respostas) {
            res.status(200).send(respostas)
        }).catch(function (Erro) {
            res.status(500).send(Erro)
        })
}


function buscarTotalPontos(req, res) {
    var user = req.params.idUsuario;


    if (user == undefined) {
        res.status(400).send("Seu usuário não esta cadastrado");
    } else {
        quizModel.buscarTotalPontos(idUsuario)
            .then(function (resultadoAutenticar) {

                console.log(`Resultados  não foi encontrado ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {

                    res.json({
                        pontuacaoFinal: resultadoAutenticar[0].pontuacaoFinal
                    });

                } else if (resultadoAutenticar.length == 0) {

                    res.status(403).send("Email e/ou senha inválido(s)");

                } else {

                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");

                }

            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o login!", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}




module.exports = {
    salvarPontuacao,
    historico,
    grafico
};
