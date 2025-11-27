create database haikyu;
use haikyu;
drop database haikyu;


CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45),
email VARCHAR (45),
senha VARCHAR(150),
fkPersonagem INT,
	constraint personagem
		foreign key (fkPersonagem)
			references personagem (idPersonagem)
);

INSERT INTO usuario (nome,email,senha,fkPersonagem) VALUES 
('Lesly','lesly@gmail.com', 'lily21wlq', null);

select * from usuario;

CREATE TABLE personagem(
idPersonagem INT PRIMARY KEY auto_increment,
personagem VARCHAR(45)
);
INSERT INTO personagem (personagem) VALUES
('Shoyo Hinata'),
('Kôshi Sugawara'),
('Tobio Kageyama'),
('Kei Tsukishima');


select * from personagem;

SELECT personagem.idPersonagem, personagem.personagem
FROM usuario
JOIN personagem ON usuario.fkPersonagem = personagem.idPersonagem
WHERE usuario.idUsuario = 3;

create table respostas(
idResposta INT PRIMARY KEY AUTO_INCREMENT,
pontuacaoFinal INT,
dtQuiz datetime,
fkUsuario INT,
	constraint usuario
		foreign key (fkUsuario)
			references usuario (idUsuario)
);


select * from respostas;

 SELECT pontuacaoFinal AS pontuacao, dtQuiz AS data_hora
        FROM respostas
        WHERE fkUsuario = 3
        ORDER BY dtQuiz ASC;
        
SELECT pontuacaoFinal AS pontuacao, dtQuiz AS data_hora
        FROM respostas
        WHERE fkUsuario = 3
        ORDER BY dtQuiz ASC;

select 
	SUM(pontuacaoFinal) 
		from respostas 
			where fkUsuario = 3;
            
            
				select 
		MAX(pontuacaoFinal) 
			from respostas 
				where fkUsuario = 3;
            


describe respostas;


-- CREATE TABLE tentativa(
-- idTentativa INT PRIMARY KEY auto_increment,
-- pontuacao INT,
-- inicio DATETIME,
-- fim DATETIME,
-- fkUsuario INT,
-- fkQuiz INT,
-- 	constraint tentativaUsuario
-- 		foreign key (fkUsuario)
-- 			references usuario(idUsuario),
--       constraint  quizUser
-- 		foreign key (fkQuiz)
-- 			references quiz(idQuiz)
--       );

-- CREATE TABLE quiz(
-- idQuiz INT PRIMARY KEY AUTO_INCREMENT,
-- fkPergunta INT,
-- 	constraint pergunta
-- 		foreign key (fkPergunta)
-- 			references pergunta(idPergunta));
--             
-- create table pergunta(
-- idPergunta INT PRIMARY KEY auto_increment,
-- perguntas longtext,
-- correto boolean
-- );








