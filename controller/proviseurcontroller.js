const proviseurModel = require('../model/proviseurmodels');

const proviseurController = {

    async renderScolarite(req, res) {
        try {
            const role = req.session.role;

            // Utiliser la fonction pour récupérer les informations de scolarité de tous les utilisateurs
            const scolarite = await proviseurModel.getAllScolarites();
            console.log(scolarite);
            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    async valideNote(req, res) {
        try {
            const { id_scolarite } = req.body;
            if (!id_scolarite) {
                return res.status(400).send("L'ID de la scolarité est manquant dans le corps de la requête.");
            }
            await proviseurModel.valideNote(id_scolarite);
            const role = req.session.role;
            // Utiliser la fonction pour récupérer les informations de scolarité de tous les utilisateurs
            const scolarite = await proviseurModel.getAllScolarites();

            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    async modifieNote(req, res) {
        try {
            const { note, id_scolarite } = req.body;
            if (!note || !id_scolarite) {
                return res.status(400).send("Les données de la note ou l'ID de la scolarité sont manquants.");
            }
            await proviseurModel.modifieNote(note, id_scolarite);

            const role = req.session.role;
            // Utiliser la fonction pour récupérer les informations de scolarité de tous les utilisateurs
            const scolarite = await proviseurModel.getAllScolarites();

            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    async supprimeNote(req, res) {
        try {
          const { id_scolarite } = req.body;
          if (!id_scolarite) {
            return res.status(400).send("ID de scolarité manquant.");
          }
          await proviseurModel.supprimeNote(id_scolarite);
          const role = req.session.role;
          const scolarite = await proviseurModel.getAllScolarites();
          res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
          console.error(error);
          res.status(500).send("Une erreur s'est produite lors de la suppression de la note.");
        }
    },

    renderProjet(req, res) {
        try {
            const role = req.session.role;
            // AJOUTER MODEL ET DONNEES EN FONCTION DES BESOINS
            res.render('projetProviseur', { role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement des projets.");
        }
    }
};

module.exports = proviseurController;
