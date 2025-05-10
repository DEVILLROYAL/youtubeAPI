const express = require('express');
const router = express.Router();
const { getAnime } = require('../controllers/detailController');

router.get('/',getAnime);

module.exports = router;