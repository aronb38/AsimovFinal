const connectmodel = require('../model/connectmodel'); // Importation du modèle Connect

const connectcontroller = {
    // Méthode pour rendre la vue du formulaire de connexion
    async renderLoginForm(req, res) {
        res.render('login'); // Affiche la vue du formulaire de connexion
    },

    // Méthode pour gérer le processus de connexion de l'utilisateur
    async login(req, res) {
        try {
            const { id_utilisateur, mdp } = req.body; // Récupère les identifiants d'utilisateur et le mot de passe
            const utilisateur = await connectmodel.getUtilisateurByLogin(id_utilisateur, mdp); // Vérifie les informations d'identification dans le modèle

            if (utilisateur) { // Si les informations sont correctes
                // Stocke l'ID de l'utilisateur et son rôle dans la session
                req.session.userId = utilisateur.id_utilisateur;
                req.session.role = utilisateur.id_role;

                let vueAccueil; // Variable pour stocker le nom de la vue d'accueil en fonction du rôle de l'utilisateur

                // Détermine la vue d'accueil en fonction du rôle de l'utilisateur
                switch (utilisateur.id_role) {
                    case 1:
                        vueAccueil = "accueilProviseur";
                        break;
                    case 2:
                        vueAccueil = "accueilEnseignant";
                        break;
                    case 3:
                        vueAccueil = "accueilSecretariat";
                        break;
                    case 4:
                        vueAccueil = "accueilEleve";
                        break;
                    default:
                        console.log("Erreur");
                }
                // Rend la vue d'accueil correspondante avec les informations utilisateur
                res.render(vueAccueil, { nom: utilisateur.nom, prenom: utilisateur.prenom, role: utilisateur.id_role });
            } else {
                res.send("Identifiant ou mot de passe incorrect."); // Envoie un message d'erreur si les informations sont incorrectes
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors de la connexion."); // Envoie un message d'erreur en cas d'erreur interne du serveur
        }
    }
};

module.exports = connectcontroller; // Exportation du contrôleur pour qu'il puisse être utilisé dans d'autres fichiers de l'application
