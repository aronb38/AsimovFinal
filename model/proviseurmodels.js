const pool = require('../config/database');

async function getAllScolarites() {
    try {
        const sql = `
            SELECT 
                scolarite.id_scolarite, 
                scolarite.estvalide, 
                scolarite.numero_semestre, 
                scolarite.moyenne_semestre, 
                scolarite.annee_scolaire, 
                classe.libelle_classe, 
                utilisateur.nom 
            FROM scolarite 
            JOIN utilisateur ON scolarite.id_utilisateur = utilisateur.id_utilisateur 
            JOIN classe ON scolarite.id_classe = classe.id_classe
        `;
        const [rows] = await pool.query(sql);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

async function valideNote(id_scolarite) {
    try {
        const sql = "UPDATE scolarite SET estvalide = 1 WHERE id_scolarite = ?";
        await pool.query(sql, [id_scolarite]);
        return true;
    } catch (err) {
        console.error("Error updating data in the database:", err);
        throw err;
    }
}

async function modifieNote(note, id_scolarite) {
    try {
        const sql = "UPDATE scolarite SET moyenne_semestre = ? WHERE id_scolarite = ?";
        await pool.query(sql, [note, id_scolarite]);

        const sql2 = "UPDATE scolarite SET estvalide = 0 WHERE id_scolarite = ?";
        await pool.query(sql2, [id_scolarite]);

        return true;
    } catch (err) {
        console.error("Error updating data in the database:", err);
        throw err;
    }
}

async function supprimeNote(id_scolarite) {
    try {
        const sql = "DELETE FROM scolarite WHERE id_scolarite = ?";
        await pool.query(sql, [id_scolarite]);
        return true;
    } catch (err) {
        console.error("Error deleting data from the database:", err);
        throw err;
    }
}

module.exports = {
    supprimeNote,
    getAllScolarites,
    valideNote,
    modifieNote
};
