const express = require('express');
const router = express.Router();
const eleveController = require('../controller/eleveController');
const decoRoute = require('./decoRoute');

router.get('/scolarite', eleveController.renderScolarite);
router.get('/stage', eleveController.renderStage);
router.get('/projet', eleveController.renderProjet);

router.use(decoRoute);
module.exports = router;