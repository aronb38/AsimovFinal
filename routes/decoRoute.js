const express = require('express');
const router = express.Router();
const decocontroller = require('../controller/decocontroller');

// Route pour la déconnexion
router.get('/logout', decocontroller.logout);

module.exports = router;