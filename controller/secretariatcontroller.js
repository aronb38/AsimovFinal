const secretariatModel = require('../model/secretariatModel');

const secretariatController = {


    // Fonction pour afficher la liste des élèves
    async renderListeEleve(req, res) {
        try {
            const eleves = await secretariatModel.getEleves();
            const role = req.session.role;
            const enseignants = await secretariatModel.getEnseignants();
            // Rendre la vue 'scolariteSecretariat' avec les données récupérées
            res.render('scolariteSecretariat', { eleves, role, enseignants });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erreur lors du chargement de la liste des élèves.");
        }
    },

    async renderFormulaireSaisieNotes(req, res) {
        try {
            const userId = req.query.id_utilisateur;// Récupérer l'ID de l'utilisateur depuis la requête
            const role = req.session.role;
            // Récupérer le rôle de l'utilisateur depuis la session
            res.render('saisirNotes', { userId, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erreur lors du chargement du formulaire de saisie des notes.");
        }
    },

    async enregistrerNotes(req, res) {
        try {
            const { id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur } = req.body; // Récupérer les données de la requête
            await secretariatModel.enregistrerNotes(id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur);
            //Appeler la fonction pour enregistrer les notes dans le modèle secretariatModel
            const role = req.session.role;
            const eleves = await secretariatModel.getEleves();
            const enseignants = await secretariatModel.getEnseignants();
            res.render('scolariteSecretariat',{role, eleves, enseignants});
        } catch (error) {
            console.error(error);
            res.status(500).send("Erreur lors de l'enregistrement des notes.");
        }
    },


    // Fonction pour affecter un référent à un élève
    async affecterReferent(req, res) {
        try {
            const { id_responsable, id_eleve } = req.body;
            await secretariatModel.affecterReferent(id_responsable, id_eleve);
            // Rediriger vers la page de la scolarité après l'affectation du référent
            res.redirect('/secretariat/scolarite');
        } catch (error) {
            console.error(error);
            res.status(500).send("Erreur lors de l'affectation du référent.");
        }
    }

};

module.exports = secretariatController; //Exporte le contrôleur secretariatController
