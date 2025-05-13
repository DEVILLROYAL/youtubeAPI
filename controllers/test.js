const axios = require('axios');
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const MUSE_INDIA_CHANNEL_ID = 'UCYYhAzgWuxPauRXdPpLAX3Q';
const playlistId = "PLpm1VVK4UL16aPAGk_ZCCpaAQ99Q9nj4e";
const { sleep } = require('../utils/apiHelpers');

const getTest = async (req, res) => {
    try{
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        part: 'snippet',
        id: playlistId,
        key: YOUTUBE_API_KEY,
      }
    });
    const ytTitle = response.data.items;
    const theTitle = ytTitle[0].snippet.title;
    const animeTitle = theTitle.replace(/\[.*?\]|\(.*?\)|hindi dub| Muse IN/gi, '').trim();


       try {
        await sleep(1500); // Prevent 429
        const animeRes = await axios.get('https://api.jikan.moe/v4/anime', {
          params: { q: animeTitle, limit: 1 }
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
    catch (error){
        console.log('playlist title fetch failer: server error');
    }
}
module.exports = { getTest };