const express = require('express');
const router = express.Router();
const proviseurController = require('../controller/proviseurcontroller');

router.get('/scolarite', proviseurController.renderScolarite);
router.get('/projet', proviseurController.renderProjet);
router.post('/validenote', proviseurController.valideNote);
router.post('/modifienote', proviseurController.modifieNote);
router.post('/supprimenote', proviseurController.supprimeNote); // Nouvelle route pour la suppression d'une moyenne

module.exports = router;
