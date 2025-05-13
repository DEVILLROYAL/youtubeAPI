const expree = require('express');
const router = expree.Router();
const { getTest } = require('../controllers/test');

router.get('/', getTest);

module.exports = router;