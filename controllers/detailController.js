const axios = require('axios');
const { Result } = require('express-validator');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL:3600 });

const getAnime = async (req, res) => {
    const animeArray = [];
    const search = req.query.q;
    const limit = req.query.limit;
    const playlistId = req.query.playlistId;
    const cacheKey = `anime:${search}:${limit}`;

    const cachedData = cache.get(cacheKey);
    if(cachedData) {
      console.log('serving from cache');
      return res.json(cachedData);
    }

    try{
        const animeRes = await axios.get('https://api.jikan.moe/v4/anime', {
          params: {
            q: search,
            limit: limit || 1
          }
        });
        const animeData = animeRes.data.data[0];
        if (animeData) {
            animeArray.push({
            animeTitle: animeData.title,
            playlistId:playlistId,
            image: animeData.images.jpg.large_image_url,
            description: animeData.synopsis,
            trailer: animeData.trailer.embed_url,
            score: animeData.score,
            type: animeData.type,
            source: animeData.source,
            rating: animeData.rating,
            duration: animeData.duration,
            episodes: animeData.episodes,

          });
        } else {
          console.warn(`No match found for "${searchQuery}"`);
        }
            if (!animeData) {
          return res.status(404).json({ message: 'Anime not found' });
    }
  }catch (err) {
        console.error(`Error fetching data : ${err.message}`);
      }
          cache.set(cacheKey, animeArray);
          res.json(animeArray);
}

module.exports = { getAnime };