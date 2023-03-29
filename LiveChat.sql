-- --------------------------------------------------------
CREATE DATABASE LiveChat;
USE LiveChat;
--
-- Estructura de tabla para la tabla `Message`
--

CREATE TABLE `Message` (
  `id` varchar(16) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `userId_fk` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Message`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `User`
--

CREATE TABLE `User` (
  `id` varchar(16) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `User`
--


-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId_fk` (`userId_fk`);

--
-- Indices de la tabla `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Message`
--
ALTER TABLE `Message`
  ADD CONSTRAINT `Message_ibfk_1` FOREIGN KEY (`userId_fk`) REFERENCES `User` (`id`);
COMMIT;


