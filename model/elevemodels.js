const pool = require('../config/database'); // Importe la configuration de la base de données

//---------------------------------- BLOC ELEVE SCOLARITE----------------------------------------//

// Fonction pour obtenir les informations sur la scolarité d'un utilisateur par son ID
async function getScolariteByUserId(userId) {
    try {
        // Requête SQL pour récupérer les données de la scolarité d'un utilisateur
        const sql = "SELECT scolarite.id_scolarite, scolarite.estvalide, scolarite.numero_semestre, scolarite.moyenne_semestre, scolarite.annee_scolaire, classe.libelle_classe, utilisateur.nom FROM scolarite JOIN utilisateur ON scolarite.id_utilisateur = utilisateur.id_utilisateur JOIN classe ON scolarite.id_classe = classe.id_classe WHERE scolarite.id_utilisateur = ?";

        // Exécute la requête SQL avec les paramètres fournis
        const [rows, fields] = await pool.query(sql, [userId]);
        
        // Retourne les résultats de la requête
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err); // Affiche une erreur en cas de problème
        throw err;
    }
}

// Fonction pour obtenir l'ID de l'enseignant référent d'un utilisateur par son ID
async function getIdEnseignantReferent(userId) {
    try {
        // Requête SQL pour récupérer l'enseignant référent d'un utilisateur
        const sql = "SELECT (SELECT nom FROM utilisateur WHERE id_utilisateur = u.id_responsable) AS nom_responsable, (SELECT prenom FROM utilisateur WHERE id_utilisateur = u.id_responsable) AS prenom_responsable FROM utilisateur u WHERE u.id_utilisateur = ?";

        // Exécute la requête SQL avec les paramètres fournis
        const [rows,fields] = await pool.query(sql, [userId]);
        
        // Retourne les résultats de la requête
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err); // Affiche une erreur en cas de problème
        throw err;
    }
}

//---------------------------------- BLOC ELEVE STAGE----------------------------------------//

// Fonction pour obtenir les informations sur le stage d'un utilisateur par son ID
async function getStageById(id_utilisateur, mdp) {
    try {
        // Requête SQL pour récupérer les informations sur le stage d'un utilisateur
        const sql = "SELECT * FROM stage WHERE id_utilisateur = ? AND mdp = ?";

        // Exécute la requête SQL avec les paramètres fournis
        const [rows, fields] = await pool.query(sql, [id_utilisateur, mdp]);
        
        // Retourne les résultats de la requête
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err); // Affiche une erreur en cas de problème
        throw err;
    }
}

//---------------------------------- BLOC ELEVE PROJET----------------------------------------//

// Fonction pour obtenir les informations sur les projets
async function getProjet() {
    try {
        // Requête SQL pour récupérer les informations sur les projets
        const sql = "SELECT projet.id_projet, projet.nom_projet, projet.description_projet, projet.date_debut, projet.date_fin, utilisateur.nom AS nom_responsable FROM projet JOIN utilisateur ON projet.id_responsableprojet = utilisateur.id_utilisateur";   

        // Exécute la requête SQL
        const [rows, fields] = await pool.query(sql);
        
        // Retourne les résultats de la requête
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err); // Affiche une erreur en cas de problème
        throw err;
    }
}

// Exporte les fonctions pour qu'elles puissent être utilisées dans d'autres parties de l'application
module.exports = {
    getScolariteByUserId,
    getIdEnseignantReferent,
    getStageById,
    getProjet
};
