const express = require('express');
const router = express.Router();
const dadosController = require('../controllers/dadosController');

router.get('/solo', dadosController.getSoloData);
router.post('/solo', dadosController.postSoloData);

router.get('/clima', dadosController.getClimaData);
router.post('/clima', dadosController.postClimaData);

module.exports = router;
