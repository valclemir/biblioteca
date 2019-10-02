-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.8-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para biblioteca
CREATE DATABASE IF NOT EXISTS `biblioteca` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `biblioteca`;

-- Copiando estrutura para tabela biblioteca.area
CREATE TABLE IF NOT EXISTS `area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.area: ~15 rows (aproximadamente)
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` (`id`, `nome`) VALUES
	(1, 'Banco de Dados'),
	(2, 'Mobile'),
	(3, 'ProgramaÃ§Ã£o'),
	(4, 'PadrÃµes de Projetos'),
	(5, 'Web'),
	(6, 'Redes'),
	(7, 'Sistemas Operacionais'),
	(8, 'Cloud Computing'),
	(9, 'Guias'),
	(10, 'Controle de VersÃ£o'),
	(11, 'Frameworks'),
	(12, 'TesteArea'),
	(13, 'TesteArea'),
	(14, 'TesteArea'),
	(15, 'Física quântica');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;

-- Copiando estrutura para tabela biblioteca.autor
CREATE TABLE IF NOT EXISTS `autor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.autor: ~34 rows (aproximadamente)
/*!40000 ALTER TABLE `autor` DISABLE KEYS */;
INSERT INTO `autor` (`id`, `nome`) VALUES
	(1, 'Mauricio Aniche'),
	(2, 'Carlos Bueno'),
	(3, 'Alexandre Aquiles'),
	(4, 'Rodrigo Ferreira'),
	(5, 'Guilherme Silveira'),
	(6, 'Alberto Souza'),
	(7, 'Anderson Leite'),
	(8, 'Daniel Romero'),
	(9, 'Daniel Wildt'),
	(10, 'Dionata Moura'),
	(11, 'Ã‰derson CÃ¡ssio'),
	(12, 'Eduardo Guerra'),
	(13, 'Everton Coimbra de AraÃºjo'),
	(14, 'Felipe Cruz'),
	(15, 'Felipe Torres'),
	(16, 'Gabriel Schade Cardoso'),
	(17, 'Greg Nudelman'),
	(18, 'MÃ¡rio Amaral'),
	(19, 'Joviane Jardim'),
	(20, 'HÃ©bert Coelho'),
	(21, 'Henrique Lobo Weissmann'),
	(22, 'JoÃ£o Bosco Monteiro'),
	(23, 'Luscas Souza'),
	(24, 'TÃ¡rcio Zemel'),
	(25, 'Thiago CustÃ³dio'),
	(26, 'PlÃ­nio Balduino'),
	(27, 'Rodrigo Turini'),
	(28, 'VinÃ­cius Baggio Fuentes'),
	(29, 'Eduardo GonÃ§alves'),
	(30, 'Lucas Cavalcante'),
	(34, 'JosÃ© Valclemir'),
	(35, 'Jason Brownlee'),
	(36, 'Valclemir'),
	(37, 'Teste');
/*!40000 ALTER TABLE `autor` ENABLE KEYS */;

-- Copiando estrutura para tabela biblioteca.editora
CREATE TABLE IF NOT EXISTS `editora` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.editora: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `editora` DISABLE KEYS */;
INSERT INTO `editora` (`id`, `nome`) VALUES
	(1, 'Casa do CÃ³digo'),
	(2, 'Novatec'),
	(3, 'TesteEditora');
/*!40000 ALTER TABLE `editora` ENABLE KEYS */;

-- Copiando estrutura para tabela biblioteca.emprestimo
CREATE TABLE IF NOT EXISTS `emprestimo` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `livro_ID` int(10) unsigned NOT NULL,
  `data_emprestimo` datetime NOT NULL,
  `data_devolucao` datetime NOT NULL,
  `codigo_supervisor` int(11) NOT NULL,
  `funcionario_matricula` int(11) NOT NULL,
  `status_devolucao` varchar(50) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `fk_emprestimo_livro1_idx` (`livro_ID`),
  KEY `fk_emprestimo_funcionario1_idx` (`funcionario_matricula`),
  KEY `fk_codigo_supervisor` (`codigo_supervisor`),
  CONSTRAINT `fk_codigo_supervisor` FOREIGN KEY (`codigo_supervisor`) REFERENCES `supervisor` (`codigo`),
  CONSTRAINT `fk_emprestimo_funcionario1` FOREIGN KEY (`funcionario_matricula`) REFERENCES `funcionario` (`matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_emprestimo_livro1` FOREIGN KEY (`livro_ID`) REFERENCES `livro` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.emprestimo: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `emprestimo` DISABLE KEYS */;
INSERT INTO `emprestimo` (`ID`, `livro_ID`, `data_emprestimo`, `data_devolucao`, `codigo_supervisor`, `funcionario_matricula`, `status_devolucao`) VALUES
	(32, 22, '2019-10-02 00:00:00', '2019-10-03 00:00:00', 1604, 12345, 'Em aberto'),
	(33, 30, '2019-10-01 00:00:00', '2019-10-02 00:00:00', 1604, 12345, 'Em aberto'),
	(34, 27, '2019-10-01 00:00:00', '2018-05-01 00:00:00', 1604, 12345, 'Devolvido');
/*!40000 ALTER TABLE `emprestimo` ENABLE KEYS */;

-- Copiando estrutura para tabela biblioteca.funcionario
CREATE TABLE IF NOT EXISTS `funcionario` (
  `matricula` int(11) NOT NULL,
  `nome` varchar(255) CHARACTER SET utf8 NOT NULL,
  `cpf` varchar(14) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `telefone` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`matricula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.funcionario: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` (`matricula`, `nome`, `cpf`, `email`, `telefone`) VALUES
	(12345, 'José Mário Rodrigues', '061.548.974-58', 'mario@odontosystem.com.br', '(85) 55555-5555');
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;

-- Copiando estrutura para tabela biblioteca.livro
CREATE TABLE IF NOT EXISTS `livro` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(60) CHARACTER SET utf8 NOT NULL,
  `autor_id` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  `edicao` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `editora_id` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `paginas` int(11) NOT NULL,
  `armario` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `ano` int(11) NOT NULL,
  `prateleira` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `isbn` varchar(45) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_livro_autor1_idx` (`autor_id`),
  KEY `fk_livro_area1_idx` (`area_id`),
  KEY `fk_livro_editora1_idx` (`editora_id`),
  CONSTRAINT `fk_livro_area1` FOREIGN KEY (`area_id`) REFERENCES `area` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_livro_autor1` FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_livro_editora1` FOREIGN KEY (`editora_id`) REFERENCES `editora` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.livro: ~33 rows (aproximadamente)
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` (`ID`, `titulo`, `autor_id`, `area_id`, `edicao`, `editora_id`, `quantidade`, `paginas`, `armario`, `ano`, `prateleira`, `isbn`) VALUES
	(3, 'OrientaÃ§Ã£o a Objetos e SOLID para Ninjas', 1, 3, '3Âª', 1, 1, 166, 'II', 2015, '1', '324965782-0'),
	(4, 'Guia do mestre programador', 2, 9, '1Âª', 1, 0, 203, 'II', 2015, '2', '495641325-0'),
	(5, 'Controlando versÃµes com Git e GitHub', 3, 10, '2Âª', 1, 0, 175, 'III', 2014, '1', '316497521-0'),
	(6, 'Java SE 8 Programmer I', 5, 3, '1Âª', 1, 1, 412, 'IV', 2014, '1', '634921457-0'),
	(7, 'Google Android - Crie AplicaÃ§Ãµes para celulares e tables', 22, 2, '2Âª', 1, 7, 230, 'I', 2013, '7', '162947243-0'),
	(8, 'Desenvolvimento de Jogos para Android', 7, 2, '1Âª', 1, 1, 175, 'I', 2013, '7', '364916736-0'),
	(9, 'ComeÃ§ando com Linux ', 8, 7, '2Âª', 1, 7, 313, 'II', 2012, '6', '645645633-0'),
	(10, 'Ruby - Aprenda a programar na linguagem mais divertida', 23, 3, '3Âª', 1, 1, 299, 'X', 2013, '4', '454166678-0'),
	(11, 'Vire o jogo com Spring Framework', 21, 11, '3Âª', 1, 3, 250, 'IX', 2014, '1', '126663457-0'),
	(12, 'Swift - Programe para iPhone e iPad', 5, 2, '1Âª', 1, 0, 212, 'III', 2015, '2', '124345344-0'),
	(13, 'Web Design Responsivo', 24, 5, '2Âª', 1, 2, 130, 'I', 2013, '2', '369767968-0'),
	(14, 'Criando aplicaÃ§Ãµes para o seu Windows Phone', 16, 2, '4Âª', 1, 4, 280, 'II', 2013, '3', '346455789-0'),
	(15, 'Azure', 25, 8, '1Âª', 1, 0, 120, 'IV', 2015, '7', '787875421-1'),
	(16, 'C# e Visual Studio', 13, 3, '1Âª', 1, 0, 222, 'III', 2015, '3', '677784123-1'),
	(17, 'Design Patterns com Java', 12, 4, '2Âª', 1, 1, 192, 'II', 2014, '1', '789679461-1'),
	(18, 'Jogos Android', 7, 2, '2Âª', 1, 1, 215, 'I', 2015, '5', '792531272-1'),
	(19, 'Java EE', 6, 5, '1Âª', 1, 4, 200, 'V', 2015, '3', '678695526-0'),
	(20, 'Dominando JavaScript com jQuery', 26, 5, '5Âª', 1, 1, 145, 'II', 2014, '4', '374675611-0'),
	(21, 'Desenvolva jogos com HTML5 Canvas e JavaScript', 11, 5, '1Âª', 1, 1, 290, 'VI', 2015, '1', '459679895-1'),
	(22, 'Desenvolvimento de Jogos para iOS', 7, 2, '2Âª', 1, 4, 180, 'V', 2014, '3', '978912121-0'),
	(23, 'JSF Eficaz', 20, 5, '1Âª', 1, 1, 231, 'I', 2014, '1', '797898595-1'),
	(24, 'PHP e Laravel', 27, 5, '2Âª', 1, 2, 190, 'II', 2014, '1', '978952312-0'),
	(25, 'Desbravando Java e OrientaÃ§Ã£o a Objetos', 27, 3, '3Âª', 1, 7, 356, 'III', 2013, '1', '656312371-0'),
	(26, 'Python - Escreva seus primeiros programas', 14, 3, '1Âª', 1, 0, 298, 'VII', 2015, '3', '646213135-1'),
	(27, 'Ruby on Rails', 28, 5, '3Âª', 1, 0, 321, 'V', 2013, '3', '146546789-0'),
	(28, 'eXtreme Programming', 9, 4, '1Âª', 1, 2, 200, 'III-A', 2014, '4', '972531378-1'),
	(29, 'PadrÃµes de Projeto para Android', 17, 4, '1Âª', 2, 2, 395, 'II-B', 2015, '5', '6747748-8'),
	(30, 'SQL - Uma Abordagem para banco de dados', 29, 1, '1Âª', 1, 2, 200, 'II-B', 2014, '5', '767565-8'),
	(31, 'Microsoft Kinect', 16, 3, '1Âª', 1, 1, 200, 'II-A', 2013, '1', '6756757-7'),
	(32, 'VRaptor', 30, 11, '1Âª', 1, 1, 214, 'I-A', 2015, '6', '789798-9'),
	(33, 'José Valclemir', 30, 11, '1ª', 1, 1, 214, 'I-A', 2015, '6', '789798-9'),
	(35, 'Codigo livre', 6, 6, '2', 1, 45, 222, 'IV', 2019, '5', '5555555555-5'),
	(36, 'Teste livro', 4, 4, '5', 1, 30, 300, 'IV', 2019, '5', '5555555555-5');
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;

-- Copiando estrutura para tabela biblioteca.reserva
CREATE TABLE IF NOT EXISTS `reserva` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `data` datetime NOT NULL,
  `livro_ID` int(10) unsigned NOT NULL,
  `funcionario_matricula` int(11) NOT NULL,
  `status_reserva` tinyint(4) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_reserva_livro_idx` (`livro_ID`),
  KEY `fk_reserva_funcionario1_idx` (`funcionario_matricula`),
  CONSTRAINT `fk_reserva_funcionario1` FOREIGN KEY (`funcionario_matricula`) REFERENCES `funcionario` (`matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_reserva_livro` FOREIGN KEY (`livro_ID`) REFERENCES `livro` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.reserva: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;

-- Copiando estrutura para tabela biblioteca.supervisor
CREATE TABLE IF NOT EXISTS `supervisor` (
  `login` varchar(45) CHARACTER SET utf8 NOT NULL,
  `senha` varchar(45) CHARACTER SET utf8 NOT NULL,
  `codigo` int(11) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Copiando dados para a tabela biblioteca.supervisor: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `supervisor` DISABLE KEYS */;
INSERT INTO `supervisor` (`login`, `senha`, `codigo`) VALUES
	('admin', 'admin', 1604);
/*!40000 ALTER TABLE `supervisor` ENABLE KEYS */;

-- Copiando estrutura para view biblioteca.vw_dadoslivro
-- Criando tabela temporária para evitar erros de dependência de VIEW
CREATE TABLE `vw_dadoslivro` (
	`titulo` VARCHAR(60) NOT NULL COLLATE 'utf8_general_ci',
	`Nome autor` VARCHAR(100) NOT NULL COLLATE 'utf8_general_ci',
	`Gênero` VARCHAR(30) NOT NULL COLLATE 'utf8_general_ci',
	`edicao` VARCHAR(45) NULL COLLATE 'utf8_general_ci',
	`Nome editora` VARCHAR(30) NOT NULL COLLATE 'utf8_general_ci',
	`quantidade` INT(11) NOT NULL,
	`paginas` INT(11) NOT NULL,
	`armario` VARCHAR(30) NULL COLLATE 'utf8_general_ci',
	`ano` INT(11) NOT NULL,
	`prateleira` VARCHAR(30) NULL COLLATE 'utf8_general_ci',
	`isbn` VARCHAR(45) NOT NULL COLLATE 'utf8_general_ci'
) ENGINE=MyISAM;

-- Copiando estrutura para view biblioteca.vw_dadoslivro
-- Removendo tabela temporária e criando a estrutura VIEW final
DROP TABLE IF EXISTS `vw_dadoslivro`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_dadoslivro` AS SELECT T1.titulo,  
       T2.nome `Nome autor`,
		 T3.nome `Gênero`,
		 T1.edicao,
		 T4.nome `Nome editora`,
		 T1.quantidade,
       T1.paginas,
       T1.armario,
       T1.ano,
       T1.prateleira,
       T1.isbn
FROM livro T1
INNER JOIN Autor T2
	ON (T1.autor_id = T2.id)
INNER JOIN AREA T3
	ON (T1.area_id = T3.id)
INNER JOIN Editora T4
	ON (T1.editora_id = T4.id) ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
