const axios = require('axios');
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 });

const getPlaylistVideos = async (req, res) => {
  const playlistId = req.query.playlistId;
  const cacheKey = `playlist:${playlistId}`;

  const playlistArray = []
  const cachedData = cache.get( cacheKey );
  if(cachedData){
    console.log('serving from cache');
    return res.json(cachedData);
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        playlistId,
        maxResults: 50,
        key: YOUTUBE_API_KEY,
      }
    });
    const videos = response.data.items[0];
    
    if (videos){
      playlistArray.push({
      title: videos.snippet.title,
      videoId: videos.snippet.resourceId.videoId,
      thumbnails: videos.snippet.thumbnails,
      publishedAt: videos.snippet.publishedAt,
      embedUrl: `https://www.youtube.com/embed/${videos.snippet.resourceId.videoId}`
      });
    }
    cache.set( cacheKey, playlistArray );
    res.json(playlistArray);
  } catch (error) {
    console.error('Error fetching playlist videos:', error.message);
    res.status(500).json({ error: 'Failed to fetch playlist videos' });
  }
};
module.exports = { getPlaylistVideos };