-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 20 mai 2024 à 20:08
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `asimov`
--

-- --------------------------------------------------------

--
-- Structure de la table `recherche_stage`
--

DROP TABLE IF EXISTS `recherche_stage`;
CREATE TABLE IF NOT EXISTS `recherche_stage` (
  `id_recherche_stage` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_utilisateur` bigint NOT NULL,
  `nom_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresse_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nb_lettre` bigint NOT NULL,
  PRIMARY KEY (`id_recherche_stage`),
  KEY `recherche_stage_id_utilisateur_foreign` (`id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
