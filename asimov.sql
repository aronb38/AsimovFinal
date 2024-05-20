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
-- Structure de la table `classe`
--

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `id_classe` int NOT NULL,
  `libelle_classe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_classe`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`id_classe`, `libelle_classe`) VALUES
(6, '6ème'),
(5, '5ème'),
(4, '4ème'),
(3, '3ème');

-- --------------------------------------------------------

--
-- Structure de la table `equipe_projet`
--

DROP TABLE IF EXISTS `equipe_projet`;
CREATE TABLE IF NOT EXISTS `equipe_projet` (
  `id_equipe` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_projet` bigint NOT NULL,
  `id_utilisateur` bigint NOT NULL,
  PRIMARY KEY (`id_equipe`),
  KEY `idx_projet` (`id_projet`),
  KEY `idx_utilisateur` (`id_utilisateur`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `equipe_projet`
--

INSERT INTO `equipe_projet` (`id_equipe`, `id_projet`, `id_utilisateur`) VALUES
(1, 1, 4),
(2, 1, 5),
(3, 2, 5),
(4, 2, 6),
(5, 3, 6),
(6, 3, 7),
(7, 4, 4),
(8, 4, 7);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id_projet` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom_projet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_projet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_responsableprojet` bigint NOT NULL,
  `estvalide` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_projet`),
  KEY `projet_id_responsableprojet_foreign` (`id_responsableprojet`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_projet`, `nom_projet`, `description_projet`, `date_debut`, `date_fin`, `id_responsableprojet`, `estvalide`) VALUES
(1, 'Projet A', 'Description du Projet A', '2024-04-01', '2024-06-30', 4, 0),
(2, 'Projet B', 'Description du Projet B', '2024-05-15', '2024-08-15', 5, 0),
(3, 'Projet C', 'Description du Projet C', '2024-03-10', '2024-05-10', 6, 0),
(4, 'Projet D', 'Description du Projet D', '2024-03-10', '2024-05-10', 7, 0);

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

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id_role` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `libelle_role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id_role`, `libelle_role`) VALUES
(1, 'Proviseur'),
(2, 'Enseignant'),
(3, 'Secrétariat'),
(4, 'Elève');

-- --------------------------------------------------------

--
-- Structure de la table `scolarite`
--

DROP TABLE IF EXISTS `scolarite`;
CREATE TABLE IF NOT EXISTS `scolarite` (
  `id_scolarite` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_classe` int NOT NULL,
  `numero_semestre` bigint NOT NULL,
  `moyenne_semestre` decimal(8,2) NOT NULL,
  `annee_scolaire` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_utilisateur` bigint NOT NULL,
  `estvalide` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_scolarite`),
  KEY `id_utilisateur` (`id_utilisateur`),
  KEY `id_classe` (`id_classe`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

DROP TABLE IF EXISTS `stage`;
CREATE TABLE IF NOT EXISTS `stage` (
  `id_stage` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_utilisateur` bigint NOT NULL,
  `nom_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresse_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nb_lettre` bigint NOT NULL,
  `date_entretien` date DEFAULT NULL,
  `estvalide` tinyint(1) NOT NULL,
  `attestation` blob,
  `convention` blob,
  PRIMARY KEY (`id_stage`),
  KEY `stage_id_utilisateur_foreign` (`id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `mdp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_naissance` date NOT NULL,
  `id_classe` bigint NOT NULL,
  `id_role` bigint NOT NULL,
  `id_responsable` bigint DEFAULT NULL,
  PRIMARY KEY (`id_utilisateur`),
  KEY `idx_role` (`id_role`),
  KEY `idx_responsable` (`id_responsable`),
  KEY `idx_classe` (`id_classe`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `mdp`, `nom`, `prenom`, `date_naissance`, `id_classe`, `id_role`, `id_responsable`) VALUES
(1, 'bob', 'Directeur', 'David', '1990-05-15', 0, 1, 0),
(2, 'bob', 'Professeur', 'David', '1990-05-15', 0, 2, 0),
(3, 'bob', 'Secretaire', 'Marie', '1992-09-20', 0, 3, 0),
(4, 'bob', 'Elève', 'Pierre', '2005-03-10', 6, 4, 2),
(5, 'bob', 'Elève', 'Aron', '2004-03-10', 5, 4, 2),
(6, 'bob', 'Elève', 'Lucas', '1997-03-10', 4, 4, 2),
(7, 'bob', 'Elève', 'Ismael', '2001-03-10', 3, 4, 2),
(8, 'bob', 'Professeur', 'François', '1985-10-20', 0, 2, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
