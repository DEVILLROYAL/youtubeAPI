const axios = require('axios');
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 });

const getPlaylistVideos = async (req, res) => {
  const playlistId = req.query.playlistId;
  if (!playlistId) {
    return res.status(400).json({ error: 'playlistId is required' });
  }

  const cacheKey = `playlist:${playlistId}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log('Serving from cache');
    return res.json(cachedData);
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        playlistId,
        maxResults: 50,
        key: YOUTUBE_API_KEY,
      },
    });

    const items = response.data.items || [];
    const playlistArray = items.map((item) => ({
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
      thumbnails: item.snippet.thumbnails,
      publishedAt: item.snippet.publishedAt,
      embedUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
    }));

    cache.set(cacheKey, playlistArray);
    res.json(playlistArray);
  } catch (error) {
    console.error('Error fetching playlist videos:', error.message);
    res.status(500).json({
      error: 'Failed to fetch playlist videos',
      details: error.response?.data?.error?.message || error.message,
    });
  }
};

module.exports = { getPlaylistVideos };