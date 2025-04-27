const express = require('express');
const router = express.Router();
const plantasController = require('../controllers/plantasController');

router.get('/', plantasController.getPlantas);
router.post('/resolve', plantasController.resolvePlanta);

module.exports = router;
