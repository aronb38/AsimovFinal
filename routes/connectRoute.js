const express = require('express');
const router = express.Router();
const connectcontroller = require('../controller/connectcontroller.js');

// Route pour afficher le formulaire de connexion
router.get('/login', connectcontroller.renderLoginForm);

// Route pour gérer la soumission du formulaire de connexion
router.post('/login', connectcontroller.login);

module.exports = router;
