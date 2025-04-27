const express = require('express');
const router = express.Router();
const multer = require('multer');
const processImageController = require('../controllers/processImageController');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('image'), processImageController.processImage);

module.exports = router;
