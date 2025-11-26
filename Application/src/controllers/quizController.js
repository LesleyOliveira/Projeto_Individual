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
        quizModel.buscarTotalPontos(user)
            .then(function (resultadoAutenticar) {

                console.log(`Resultados  não foi encontrado ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    res.status(200).json(resultadoAutenticar)

            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o login!", erro.sqlMessage);
          
            });
    }
}
function buscarMaxPontos(req, res) {
    var user = req.params.idUsuario;
    if (user == undefined) {
        res.status(400).send("Seu usuário não esta cadastrado");
    } else {
        quizModel.buscarMaxPontos(user)
            .then(function (resultadoAutenticar) {

                console.log(`Resultados  não foi encontrado ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    res.status(200).json(resultadoAutenticar)

            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o login!", erro.sqlMessage);
          
            });
    }
}


// function sortear(req, res){
//     var idUsuario = req.body.idUsuario;
//     var personagem = req.body.personagem;

//     if(!idUsuario){
//         return res.status(400).json({mensagem: "o id não ta cadastrado"})
//     }

//     var personagem = [
//         "Shoyo Hinata",
//         "Kôshi Sugawara",
//         "Tobio Kageyama",
//         "Kei Tsukishima"
//     ];

//         var personagemSorteado = personagens[Math.floor(Math.random() * personagens.length)];

//         console.log(personagemSorteado);


//     quizModel.atualizarPersonagem(idUsuario, personagem)
//         .then(() => {
//             res.status(200).json({
//                 mensagem: "Personagem atualizado!!",
//                 personagem: personagem
//             });
//         })
//         .catch(function (erro){
//             console.log("erro aqui", erro.sqlMessage);
//             res.status(500).json(erro.sqlMessage);
//         });





// }


module.exports = {
    salvarPontuacao,
    historico,
    buscarTotalPontos,
    buscarMaxPontos,
    grafico
    // sortear
};
