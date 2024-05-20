const express = require('express');
const router = express.Router();
const eleveController = require('../controller/eleveController');
const decoRoute = require('./decoRoute');

router.get('/scolarite', eleveController.renderScolarite);

router.use(decoRoute);
module.exports = router;