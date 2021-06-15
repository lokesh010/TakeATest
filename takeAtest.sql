-- Adminer 4.8.1 MySQL 5.5.5-10.5.9-MariaDB-1 dump

SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Answers`;
CREATE TABLE `Answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `answer` text NOT NULL,
  `correct` tinyint(1) NOT NULL,
  `question_id` int(11) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `Answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `Questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Answers` (`id`, `answer`, `correct`, `question_id`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1,	'India and Bhutan',	0,	1,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(2,	'China and Russia',	0,	1,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(3,	'India and China',	1,	1,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(4,	'India',	0,	2,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(5,	'Nepal',	1,	2,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(6,	'China',	0,	2,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(7,	'Cow',	1,	3,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(8,	'Bull',	0,	3,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(9,	'Panda',	0,	3,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(10,	'9.8m/s',	1,	4,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(11,	'9.8m/s^2',	0,	4,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(12,	'Sir Issac Newton',	1,	5,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(13,	'Nikola Tesla',	0,	5,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(14,	'10m/s^2',	0,	4,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(15,	'Albert Einstein',	0,	5,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(16,	'Hydrogen',	0,	6,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(17,	'Electron',	1,	6,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(18,	'Nucleus',	0,	6,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(19,	'Atom',	0,	7,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(20,	'Neutron',	0,	7,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(21,	'Nucleus',	1,	7,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(22,	'a^2 + 2ab + b^2',	1,	8,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(23,	'a^2 - 2ab + b^2',	0,	8,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(24,	'a^2 + 2ab + b^2',	0,	9,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(25,	'a^2 - 2ab + b^2',	1,	9,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(26,	'a^2 + b^2',	0,	8,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(27,	'a^2 + b^2',	0,	9,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(28,	'(a+b) (a-b)',	1,	10,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(29,	'a^2 + 2ab + b^2',	0,	10,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(30,	'a^2 - 2ab + b^2',	0,	10,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(31,	'Java',	1,	11,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(32,	'Python',	0,	11,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(33,	'Java',	0,	12,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(34,	'Javascript',	1,	12,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(35,	'Javascript',	0,	11,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(36,	'C++',	0,	12,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(37,	'Present Working Automation',	0,	13,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(38,	'Passed Web Application',	0,	13,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(39,	'Progressive Web Application',	1,	13,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02');

DROP TABLE IF EXISTS `Questions`;
CREATE TABLE `Questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `marks` int(3) NOT NULL,
  `test_id` int(11) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_id` (`test_id`),
  CONSTRAINT `Questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `Tests` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Questions` (`id`, `question`, `marks`, `test_id`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1,	'Nepal is considered buffered state between ?',	20,	1,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(2,	'Mt. Everest Lies in which country ?',	20,	1,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(3,	'what is the national animal of Nepal ?',	10,	1,	NULL,	'2021-06-14 01:28:55',	'2021-06-14 01:28:55'),
(4,	'What is the acceleration of gravity ?',	20,	2,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(5,	'Who discovered Gravity ?',	20,	2,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(6,	'Which partical is a negative charge inside an atom?',	30,	2,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(7,	'Electron and Proton revolve around ?',	30,	2,	NULL,	'2021-06-14 01:38:13',	'2021-06-14 01:38:13'),
(8,	'What is the outcome of (a+b)^2',	25,	3,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(9,	'What is the outcome of (a-b)^2',	25,	3,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(10,	'What is the outcome of a^2 - b^2 ?',	30,	3,	NULL,	'2021-06-14 01:41:11',	'2021-06-14 01:41:11'),
(11,	'Which is a not a scripting language',	20,	4,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(12,	'Which is an interpreted language ?',	20,	4,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02'),
(13,	'What is the fullform of PWA',	20,	4,	NULL,	'2021-06-14 01:46:02',	'2021-06-14 01:46:02');

DROP TABLE IF EXISTS `Results`;
CREATE TABLE `Results` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `take_count` int(11) NOT NULL,
  `marks` int(3) NOT NULL,
  `correct` tinyint(1) NOT NULL,
  `chosen` tinyint(1) NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `answer_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `test_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `answer_id` (`answer_id`),
  KEY `question_id` (`question_id`),
  KEY `test_id` (`test_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Results_ibfk_1` FOREIGN KEY (`answer_id`) REFERENCES `Answers` (`id`),
  CONSTRAINT `Results_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `Questions` (`id`),
  CONSTRAINT `Results_ibfk_3` FOREIGN KEY (`test_id`) REFERENCES `Tests` (`id`),
  CONSTRAINT `Results_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Results` (`id`, `take_count`, `marks`, `correct`, `chosen`, `deletedAt`, `answer_id`, `question_id`, `test_id`, `user_id`, `createdAt`, `updatedAt`) VALUES
(46,	1,	20,	0,	1,	NULL,	1,	1,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(47,	1,	20,	0,	0,	NULL,	2,	1,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(48,	1,	20,	1,	0,	NULL,	3,	1,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(49,	1,	20,	0,	1,	NULL,	4,	2,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(50,	1,	20,	1,	0,	NULL,	5,	2,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(51,	1,	20,	0,	0,	NULL,	6,	2,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(52,	1,	10,	1,	1,	NULL,	7,	3,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(53,	1,	10,	0,	0,	NULL,	8,	3,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(54,	1,	10,	0,	0,	NULL,	9,	3,	1,	1,	'2021-06-14 02:44:22',	'2021-06-14 02:44:22'),
(55,	2,	20,	0,	1,	NULL,	1,	1,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(56,	2,	20,	0,	0,	NULL,	2,	1,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(57,	2,	20,	1,	0,	NULL,	3,	1,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(58,	2,	20,	0,	0,	NULL,	4,	2,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(59,	2,	20,	1,	1,	NULL,	5,	2,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(60,	2,	20,	0,	0,	NULL,	6,	2,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(61,	2,	10,	1,	0,	NULL,	7,	3,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(62,	2,	10,	0,	0,	NULL,	8,	3,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(63,	2,	10,	0,	1,	NULL,	9,	3,	1,	1,	'2021-06-14 02:45:00',	'2021-06-14 02:45:00'),
(64,	1,	20,	1,	1,	NULL,	10,	4,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(65,	1,	20,	0,	0,	NULL,	14,	4,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(66,	1,	20,	0,	0,	NULL,	11,	4,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(67,	1,	20,	0,	0,	NULL,	15,	5,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(68,	1,	30,	0,	1,	NULL,	16,	6,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(69,	1,	20,	1,	1,	NULL,	12,	5,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(70,	1,	20,	0,	0,	NULL,	13,	5,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(71,	1,	30,	0,	0,	NULL,	18,	6,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(72,	1,	30,	0,	1,	NULL,	19,	7,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(73,	1,	30,	0,	0,	NULL,	20,	7,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(74,	1,	30,	1,	0,	NULL,	17,	6,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(75,	1,	30,	1,	0,	NULL,	21,	7,	2,	1,	'2021-06-14 02:45:26',	'2021-06-14 02:45:26'),
(76,	1,	20,	1,	1,	NULL,	31,	11,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(77,	1,	20,	0,	0,	NULL,	32,	11,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(78,	1,	20,	0,	0,	NULL,	35,	11,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(79,	1,	20,	0,	0,	NULL,	33,	12,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(80,	1,	20,	0,	1,	NULL,	38,	13,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(81,	1,	20,	1,	1,	NULL,	34,	12,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(82,	1,	20,	0,	0,	NULL,	36,	12,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(83,	1,	20,	0,	0,	NULL,	37,	13,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36'),
(84,	1,	20,	1,	0,	NULL,	39,	13,	4,	2,	'2021-06-14 06:48:36',	'2021-06-14 06:48:36');

DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210610052610-create_users_table.js'),
('20210611192038-create_tests_table.js'),
('20210611192104-create_questions_table.js'),
('20210611194059-create_answers_table.js'),
('20210613075441-create_results_table.js');

DROP TABLE IF EXISTS `Tests`;
CREATE TABLE `Tests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(100) NOT NULL,
  `total_marks` int(3) NOT NULL,
  `pass_marks` int(3) NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Tests` (`id`, `name`, `description`, `total_marks`, `pass_marks`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1,	'General Knowledge',	'this test is about general knowledge',	50,	20,	NULL,	'2021-06-14 01:21:09',	'2021-06-14 01:21:09'),
(2,	'Science',	'this is a test for scientists',	100,	40,	NULL,	'2021-06-14 01:21:38',	'2021-06-14 01:21:38'),
(3,	'Maths',	'this is a test for mathematicians',	80,	35,	NULL,	'2021-06-14 01:22:07',	'2021-06-14 01:22:07'),
(4,	'Computer',	'this is a test of computer science',	60,	30,	NULL,	'2021-06-14 01:22:35',	'2021-06-14 01:22:35');

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` enum('admin','student') NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Users` (`id`, `full_name`, `phone`, `email`, `password`, `address`, `role`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1,	'Student One ',	2222222,	'studentone@test.com',	'$2b$10$QVxCsD4VinDxmjbGWbx1pOABQKu3ZR/SJytMNwoapkkhfFgXDRXNy',	'baluwatar',	'student',	NULL,	'2021-06-14 01:18:04',	'2021-06-14 01:18:04'),
(2,	'Student Two',	333333,	'studenttwo@test.com',	'$2b$10$.zQuDllF2Wy1p9pF.3ceEeJSQjUVJLypPMpbnCi50Ca6.AVQ4W.mm',	'maharajgunj',	'student',	NULL,	'2021-06-14 01:18:29',	'2021-06-14 01:18:29'),
(3,	'Administrator One',	111111,	'adminone@test.com',	'$2b$10$3iJagtB3JAYd4H9G12CIPu8E9QYzaMToASMjWF/Y/HMusB8vy1oBG',	'lazimpat',	'admin',	NULL,	'2021-06-14 01:18:52',	'2021-06-14 01:18:52'),
(4,	'Administrator Two',	555555,	'admintwo@test.com',	'$2b$10$yJ1KBEakk3ZupXGzkXxXw.NY4yaQl9HFzJSeK38MqUkIgML3uq.Mi',	'Golfutar',	'admin',	NULL,	'2021-06-14 01:19:16',	'2021-06-14 01:19:16');

-- 2021-06-14 19:03:04