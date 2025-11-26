// criando a funçao p buscar no banco de dados
var database = require ('../database/config');

function salvarPontuacao(pontos, fkUsuario) {
    var instrucao = `
        INSERT INTO respostas (pontuacaoFinal, dtQuiz, fkUsuario)
        VALUES (${pontos}, CURRENT_TIMESTAMP(), ${fkUsuario});
    `;

    console.log("Executando SQL:", instrucao);
    return database.executar(instrucao);
}

function obterHistorico(idUsuario) {
  var instrucao = `
    SELECT 
        idResposta AS tentativa,
        pontuacaoFinal AS pontuacao,
        dtQuiz AS data_hora
    FROM respostas
    WHERE fkUsuario = ${idUsuario}
    ORDER BY idResposta ASC;
`;
    console.log("Executando SQL:", instrucao);
    return database.executar(instrucao);
}

function buscarTotalPontos(idUsuario) {
    var instrucao = `
        select 
	SUM(pontuacaoFinal) as pontos
		from respostas 
			where fkUsuario = ${idUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao);
}
function buscarMaxPontos(idUsuario) {
    var instrucao = `
             select 
	MAX(pontuacaoFinal) as pontos
		from respostas 
			where fkUsuario = ${idUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao);
}




// function atualizarPersonagem(idUsuario, idPersonagem){
//     var instrucao = `UPDATE usuario SET fkPersonagem= '${idPersonagem}'
//     where idUsuario = ${idUsuario};
//     `;

//     console.log("funcionou" + instrucao);
//     return database.executar(instrucao);
// }

// function buscarPeronagem(idUsuario){
//     var instrucao = `
//     SELECT personagem.idPersonagem, personagem.personagem
// FROM usuario
// JOIN personagem ON usuario.fkPersonagem = personagem.idPersonagem
// WHERE usuario.idUsuario = ${idUsuario};
//     `;


//     console.log("funcionou", instrucao);
//     return database.executar(instrucao);
// }


module.exports = {
         salvarPontuacao,
         buscarTotalPontos,
         buscarMaxPontos,
         obterHistorico
        //  atualizarPersonagem,
        //  buscarPeronagem
};
