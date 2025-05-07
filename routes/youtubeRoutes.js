const express = require('express');
const router = express.Router();

// Import controllers
const { getHindiDubAnime, getPlaylistVideos } = require('../controllers/youtubeController');

// Route for fetching Hindi Dub playlists + Jikan anime details
router.get('/', getHindiDubAnime);

// Route for fetching videos in a YouTube playlist
router.get('/:id', getPlaylistVideos);

module.exports = router;
