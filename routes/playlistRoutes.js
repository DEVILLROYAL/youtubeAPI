const express = require('express');
const router = express.Router();
const { getPlaylistVideos } = require('../controllers/playlistController');

router.get('/', getPlaylistVideos);

module.exports = router;