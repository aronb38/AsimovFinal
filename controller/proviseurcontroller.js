const proviseurModel = require('../model/proviseurmodels'); // Importation du modèle du proviseur

const proviseurController = {

    async renderScolarite(req, res) { // Fonction pour afficher la page de la scolarité du proviseur
        try {
            const role = req.session.role; // Récupération du rôle de l'utilisateur connecté

            // Utilisation du modèle pour récupérer les informations de la scolarité de tous les utilisateurs
            const scolarite = await proviseurModel.getAllScolarites();
            console.log(scolarite);
            
            // Rendu de la vue de la scolarité avec les données récupérées
            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    async valideNote(req, res) { // Fonction pour valider une note
        try {
            const { id_scolarite } = req.body; // Récupération de l'ID de la scolarité à valider dans le corps de la requête
            if (!id_scolarite) { // Si ya pas l'idscolarite alors msg erreur
                return res.status(400).send("L'ID de la scolarité est manquant dans le corps de la requête.");
            }
            await proviseurModel.valideNote(id_scolarite); // Utilisation du modèle pour valider la note

            const role = req.session.role; // Récupération du rôle de l'utilisateur
            const scolarite = await proviseurModel.getAllScolarites(); // Récupération des informations de la scolarité

            // Rendu de la vue de la scolarité après validation avec les données mises à jour
            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    async modifieNote(req, res) { // Fonction pour modifier une note
        try {
            const { note, id_scolarite } = req.body; // Récupération de la note et de l'ID de la scolarité à modifier
            if (!note || !id_scolarite) { // Vérification de la présence des données nécessaires
                return res.status(400).send("Les données de la note ou l'ID de la scolarité sont manquants.");
            }
            await proviseurModel.modifieNote(note, id_scolarite); // Utilisation du modèle pour modifier la note

            const role = req.session.role; // Récupération du rôle de l'utilisateur
            const scolarite = await proviseurModel.getAllScolarites(); // Récupération des informations de la scolarité

            // Rendu de la vue de la scolarité après modification avec les données mises à jour
            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    async supprimeNote(req, res) { // Fonction pour supprimer une note
        try {
          const { id_scolarite } = req.body; // Récupération de l'ID de la scolarité à supprimer
          if (!id_scolarite) { // Vérification de la présence de l'ID de la scolarité
            return res.status(400).send("ID de scolarité manquant.");
          }
          await proviseurModel.supprimeNote(id_scolarite); // Utilisation du modèle pour supprimer la note
          const role = req.session.role; // Récupération du rôle de l'utilisateur
          const scolarite = await proviseurModel.getAllScolarites(); // Récupération des informations de la scolarité
          
          // Rendu de la vue de la scolarité après suppression avec les données mises à jour
          res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
          console.error(error);
          res.status(500).send("Une erreur s'est produite lors de la suppression de la note.");
        }
    },

    renderProjet(req, res) { // Fonction pour afficher la page des projets du proviseur
        try {
            const role = req.session.role; // Récupération du rôle de l'utilisateur
            res.render('projetProviseur', { role }); // Rendu de la vue des projets avec le rôle de l'utilisateur
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement des projets.");
        }
    }
};

module.exports = proviseurController; // Exportation du
