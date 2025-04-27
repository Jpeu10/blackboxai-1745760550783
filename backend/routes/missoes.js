const express = require('express');
const router = express.Router();
const missoesController = require('../controllers/missoesController');

router.get('/', missoesController.getMissoes);
router.post('/', missoesController.postMissao);
router.post('/start-drone-mission', missoesController.startDroneMission);

module.exports = router;
