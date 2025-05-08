const express = require('express');
const router = express.Router();
const { getHindiDubAnime, getPlaylistVideos, getAnimeInfo } = require('../controllers/youtubeController');
const { validationResult, param, query } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

// Route for fetching Hindi Dub playlists + Jikan anime details
router.get('/',
    [query('search').optional().isString().trim()],
    validate,
    getHindiDubAnime
);

// Route for fetching videos in a YouTube playlist
router.get('/:id',
    [
        param('id').isString().notEmpty().withMessage('playlist ID is required'),
        query('page').optional().isInt({min:1}).toInt(),
        query('limit').optional().isInt({min:1, max: 50}).toInt(),
    ],
    validate,
    getPlaylistVideos);

// Route for fetching details from jikan include youtube playlist id
router.get('/anime-detail/:playlistId',
    [
        param('playlistId').isString().notEmpty().withMessage('playlist ID is required'),
        param('videoTitle').notEmpty().withMessage('videoTitle id is required')
    ],
    validate,
    getAnimeInfo);

module.exports = router;
