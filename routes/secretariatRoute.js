const express = require('express');
const router = express.Router();
const secretariatController = require('../controller/secretariatController');
const decoRoute = require('./decoRoute');

router.get('/scolarite',secretariatController.renderListeEleve);
router.get('/saisirnotes', secretariatController.renderFormulaireSaisieNotes);
router.post('/enregistrernotes', secretariatController.enregistrerNotes);
router.post('/affecterreferent', secretariatController.affecterReferent); 

router.use(decoRoute);

module.exports = router;
