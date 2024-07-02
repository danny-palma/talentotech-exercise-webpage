-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2024 at 07:32 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP DATABASE IF EXISTS techtest;
CREATE DATABASE IF NOT EXISTS techtest;
USE techtest;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `bootcamps`
--

CREATE TABLE `bootcamps` (
  `id` varchar(36) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bootcamps_foros`
--

CREATE TABLE `bootcamps_foros` (
  `id` varchar(36) NOT NULL,
  `id_bootcamp` varchar(36) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `estado_foro` tinyint(4) NOT NULL CHECK (`estado_foro` >= 0 and `estado_foro` <= 9)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bootcamps_links_externos`
--

CREATE TABLE `bootcamps_links_externos` (
  `id` varchar(36) NOT NULL,
  `id_bootcamp` varchar(36) NOT NULL,
  `link` varchar(255) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bootcamps_mentorias`
--

CREATE TABLE `bootcamps_mentorias` (
  `id` varchar(36) NOT NULL,
  `id_bootcamp` varchar(36) NOT NULL,
  `link_agendar_mentoria` varchar(255) NOT NULL,
  `link_grabaciones_mentoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bootcamps_sesiones`
--

CREATE TABLE `bootcamps_sesiones` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `id_bootcamp` varchar(36) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `link_externo` varchar(255) NOT NULL,
  `estado_sesion` tinyint(4) NOT NULL CHECK (`estado_sesion` >= 0 and `estado_sesion` <= 9)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `foros_entradas_respuestas`
--

CREATE TABLE `foros_entradas_respuestas` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `id_usuario` varchar(36) NOT NULL,
  `id_entrada` varchar(36) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha_hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sesiones_usuarios_asistencia`
--

CREATE TABLE `sesiones_usuarios_asistencia` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `id_usuario` varchar(36) NOT NULL,
  `id_sesion` varchar(36) NOT NULL,
  `estado_asistencia` tinyint(4) NOT NULL CHECK (`estado_asistencia` >= 0 and `estado_asistencia` <= 9)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `nivel_permisos` tinyint(4) NOT NULL CHECK (`nivel_permisos` >= 0 and `nivel_permisos` <= 9),
  `correo` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `departamento` varchar(255) NOT NULL,
  `localidad` varchar(255) NOT NULL,
  `municipio` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL CHECK (genero IN ('masculino', 'femenino', 'otro')),
  `ruta_imagen_perfil` varchar(512) NOT NULL,
  `numero_documento` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `puntos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_bootcamps_notas`
--

CREATE TABLE `usuarios_bootcamps_notas` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `id_usuario` varchar(36) NOT NULL,
  `id_bootcamp` varchar(36) NOT NULL,
  `id_concepto` varchar(36) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `nota` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notas_conceptos`
--
CREATE TABLE `notas_conceptos` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `id_bootcamp` varchar(36) NOT NULL,
  `concepto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_bootcamps_suscripciones`
--

CREATE TABLE `usuarios_bootcamps_suscripciones` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `id_usuario` varchar(36) NOT NULL,
  `id_bootcamp` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_foros_entradas`
--

CREATE TABLE `usuarios_foros_entradas` (
  `id` varchar(36) NOT NULL CHECK (id REGEXP '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'),
  `id_usuario` varchar(36) NOT NULL,
  `id_foro` varchar(36) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha_hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bootcamps`
--
ALTER TABLE `bootcamps`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `bootcamps_foros`
--
ALTER TABLE `bootcamps_foros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_bootcamp` (`id_bootcamp`);

--
-- Indexes for table `bootcamps_links_externos`
--
ALTER TABLE `bootcamps_links_externos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_bootcamp` (`id_bootcamp`);

--
-- Indexes for table `bootcamps_mentorias`
--
ALTER TABLE `bootcamps_mentorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_bootcamp` (`id_bootcamp`);

--
-- Indexes for table `bootcamps_sesiones`
--
ALTER TABLE `bootcamps_sesiones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_bootcamp` (`id_bootcamp`);

--
-- Indexes for table `foros_entradas_respuestas`
--
ALTER TABLE `foros_entradas_respuestas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_entrada` (`id_entrada`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `sesiones_usuarios_asistencia`
--
ALTER TABLE `sesiones_usuarios_asistencia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_sesion` (`id_sesion`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `numero_documento` (`numero_documento`);

--
-- Indexes for table `usuarios_bootcamps_notas`
--
ALTER TABLE `usuarios_bootcamps_notas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_bootcamp` (`id_bootcamp`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_concepto` (`id_concepto`);

--
-- Indexes for table `usuarios_bootcamps_suscripciones`
--
ALTER TABLE `notas_conceptos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_bootcamp` (`id_bootcamp`);

--
-- Indexes for table `usuarios_bootcamps_suscripciones`
--
ALTER TABLE `usuarios_bootcamps_suscripciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_bootcamp` (`id_bootcamp`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `usuarios_foros_entradas`
--
ALTER TABLE `usuarios_foros_entradas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_foro` (`id_foro`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bootcamps_foros`
--
ALTER TABLE `bootcamps_foros`
  ADD CONSTRAINT `bootcamps_foros_ibfk_1` FOREIGN KEY (`id_bootcamp`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `bootcamps_links_externos`
--
ALTER TABLE `bootcamps_links_externos`
  ADD CONSTRAINT `bootcamps_links_externos_ibfk_1` FOREIGN KEY (`id_bootcamp`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `bootcamps_mentorias`
--
ALTER TABLE `bootcamps_mentorias`
  ADD CONSTRAINT `bootcamps_mentorias_ibfk_1` FOREIGN KEY (`id_bootcamp`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `bootcamps_sesiones`
--
ALTER TABLE `bootcamps_sesiones`
  ADD CONSTRAINT `bootcamps_sesiones_ibfk_1` FOREIGN KEY (`id_bootcamp`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `foros_entradas_respuestas`
--
ALTER TABLE `foros_entradas_respuestas`
  ADD CONSTRAINT `foros_entradas_respuestas_ibfk_1` FOREIGN KEY (`id_entrada`) REFERENCES `usuarios_foros_entradas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `foros_entradas_respuestas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sesiones_usuarios_asistencia`
--
ALTER TABLE `sesiones_usuarios_asistencia`
  ADD CONSTRAINT `sesiones_usuarios_asistencia_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sesiones_usuarios_asistencia_ibfk_2` FOREIGN KEY (`id_sesion`) REFERENCES `bootcamps_sesiones` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `unique_session_attendance` UNIQUE (`id_usuario`, `id_sesion`);

--
-- Constraints for table `usuarios_bootcamps_notas`
--
ALTER TABLE `usuarios_bootcamps_notas`
  ADD CONSTRAINT `usuarios_bootcamps_notas_ibfk_1` FOREIGN KEY (`id_bootcamp`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarios_bootcamps_notas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarios_bootcamps_notas_ibfk_3` FOREIGN KEY (`id_concepto`) REFERENCES `notas_conceptos` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notas_conceptos`
--
ALTER TABLE `notas_conceptos`
  ADD CONSTRAINT `notas_conceptos_ibfk_2` FOREIGN KEY (`id_bootcamp`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `usuarios_bootcamps_suscripciones`
--
ALTER TABLE `usuarios_bootcamps_suscripciones`
  ADD CONSTRAINT `usuarios_bootcamps_suscripciones_ibfk_1` FOREIGN KEY (`id_bootcamp`) REFERENCES `bootcamps` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarios_bootcamps_suscripciones_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `unique_subscription` UNIQUE (`id_usuario`, `id_bootcamp`);

--
-- Constraints for table `usuarios_foros_entradas`
--
ALTER TABLE `usuarios_foros_entradas`
  ADD CONSTRAINT `usuarios_foros_entradas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarios_foros_entradas_ibfk_2` FOREIGN KEY (`id_foro`) REFERENCES `bootcamps_foros` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
