const pool = require('../config/database');

//---------------------------------- BLOC ENSEIGNANT SCOLARITE----------------------------------------//

async function getEleveByUserId(userId) {// Fonction pour récupérer les élèves associés à un utilisateur
    try {
        const sql = "SELECT * FROM utilisateur WHERE id_responsable = ?";
        const [rows, fields] = await pool.query(sql, [userId]);
        return rows; // Renvoie des données récupérées depuis la base de donnée
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

async function getScolariteByIdEleve(eleveId) { // Fonction pour récupérer la scolarité d'un élève
    try {
        const sql = "SELECT * FROM scolarite WHERE id_utilisateur = ?";
        const [rows, fields] = await pool.query(sql, [eleveId]);
        return rows;
    } catch (err) {
        console.error("Error fetching scolarite data from the database:", err);
        throw err;
    }
}


module.exports = {
    getEleveByUserId,
    getScolariteByIdEleve
};


