const decocontroller = {
    // Méthode pour gérer la déconnexion de l'utilisateur
    logout(req, res) {
        // Détruit la session de l'utilisateur
        req.session.destroy((err) => {
            if (err) {
                console.error(err); // Affiche une erreur s'il y a un problème lors de la destruction de la session
            }
            // Redirige l'utilisateur vers la page de connexion après la déconnexion
            res.redirect('/login');
        });
    }
};

module.exports = decocontroller; // Exporte le contrôleur pour qu'il puisse être utilisé dans d'autres parties de l'application
