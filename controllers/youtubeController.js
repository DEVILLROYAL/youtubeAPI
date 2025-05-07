const axios = require('axios');
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const MUSE_INDIA_CHANNEL_ID = 'UCYYhAzgWuxPauRXdPpLAX3Q';  // Musa India Channel ID

// Helper function to add delay between requests
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Controller to fetch Hindi Dub playlists + Jikan anime details
const getHindiDubAnime = async (req, res) => {
  try {
    // Fetch playlists from Muse India channel
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
            animeTitle: anime.title,
            image: anime.images.jpg.large_image_url,
            synopsis: anime.synopsis,
            score: anime.score,
            url: anime.url,
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

    res.json(animeDetails);
  } catch (err) {
    console.error('Failed to fetch playlists:', err.message);
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
};

// Controller to fetch videos from a YouTube playlist by ID
const getPlaylistVideos = async (req, res) => {
  const playlistId = req.params.id;

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        playlistId,
        maxResults: 50,
        key: YOUTUBE_API_KEY,
      }
    });

    const videos = response.data.items.map(item => ({
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
      thumbnails: item.snippet.thumbnails,
      publishedAt: item.snippet.publishedAt,
      embedUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`
    }));

    res.json({ playlistId, videos });

  } catch (error) {
    console.error('Error fetching playlist videos:', error.message);
    res.status(500).json({ error: 'Failed to fetch playlist videos' });
  }
};

module.exports = { getHindiDubAnime, getPlaylistVideos };
