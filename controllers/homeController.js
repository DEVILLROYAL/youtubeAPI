const axios = require('axios');
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const MUSE_INDIA_CHANNEL_ID = 'UCYYhAzgWuxPauRXdPpLAX3Q';
const MUSA_ASIA_CHANNEL_ID = 'UCGbshtvS9t-8CW11W7TooQg';
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 });
const { sleep } = require('../utils/apiHelpers');

const getHome = async (req, res) => {
  const cacheKey = 'home';

  const cachedData = cache.get(cacheKey);
  if(cachedData){
    console.log('serving from cache');
    return res.json(cachedData);
  }
  try {
    const search = req.query.search;
    const ytRes = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        part: 'snippet',
        channelId: MUSE_INDIA_CHANNEL_ID,
        maxResults: 50,
        key: YOUTUBE_API_KEY,
      }
    });
    const playlists = ytRes.data.items;
    const hindiPlaylists = playlists.filter(p =>
      /hindi/i.test(p.snippet.title)
    );
    if (search) {
      hindiPlaylists = hindiPlaylists.filter(p =>
        p.snippet.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    const animeDetails = [];

    for (const playlist of hindiPlaylists) {
      const playlistId = playlist.id;
      const youtubeTitle = playlist.snippet.title;
      const searchQuery = youtubeTitle.replace(/\[.*?\]|\(.*?\)|hindi dub/gi, '').trim();


      try {
        await sleep(1500); // Prevent 429
        const animeRes = await axios.get('https://api.jikan.moe/v4/anime', {
          params: { q: searchQuery, limit: 1 }
        });
        const anime = animeRes.data.data[0];

        if (anime) {
          animeDetails.push({
            playlistId,
            youtubeTitle,
            engTitle: anime.title_english,
            animeTitle: anime.title,
            image: anime.images.jpg.large_image_url,
            score: anime.score,
            type: anime.type,
            source: anime.source,
            rating: anime.rating,
            duration: anime.duration,
            episodes: anime.episodes,
          });
        } else {
          console.warn(`No match found for "${searchQuery}"`);
        }

      } catch (err) {
        console.error(`Error fetching data for ${youtubeTitle}: ${err.message}`);
      }
    }
    cache.set( cacheKey, animeDetails )
    res.json(animeDetails);

  }catch (err) {
    console.error('Failed to fetch playlists:', err.message);
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
};

module.exports = { getHome };
