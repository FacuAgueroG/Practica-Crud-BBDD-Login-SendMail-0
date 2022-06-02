-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 02-06-2022 a las 21:12:47
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `retrofutbol`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authuser`
--

CREATE TABLE `authuser` (
  `id` int(11) NOT NULL,
  `user` varchar(30) DEFAULT NULL,
  `clave` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `authuser`
--

INSERT INTO `authuser` (`id`, `user`, `clave`) VALUES
(1, 'facuaguero', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camisetas`
--

CREATE TABLE `camisetas` (
  `id` int(11) NOT NULL,
  `equipo` varchar(30) DEFAULT NULL,
  `temporada` varchar(30) DEFAULT NULL,
  `marca` varchar(30) DEFAULT NULL,
  `precio` varchar(30) DEFAULT NULL,
  `img` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `camisetas`
--

INSERT INTO `camisetas` (`id`, `equipo`, `temporada`, `marca`, `precio`, `img`) VALUES
(7, 'Barcelona', '2005-06', 'Nike', '7000', 'lpybgjnepm6lz0hfhil7'),
(8, 'Hellas', '2015-16', 'nike', '7000', 'zmjztkk8abtxvonzwe4z'),
(9, 'Inter de milan', '2010-11', 'Nike', '8000', 'vlnytkl4blbkm9ecdabo'),
(10, 'Real Madrid', '2002-03', 'Adidas', '6500', 'qmfbifhfq6bh3jafa6ic'),
(11, 'River Plate', '2018-19', 'Adidas', '9120', 'ywjequeo3qf86e35dcbz');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authuser`
--
ALTER TABLE `authuser`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `camisetas`
--
ALTER TABLE `camisetas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `authuser`
--
ALTER TABLE `authuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `camisetas`
--
ALTER TABLE `camisetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
