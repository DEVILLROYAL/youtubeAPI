# YouTube Anime Playlist API

A JavaScript-based project for interacting with the YouTube Data API, focused on fetching YouTube playlists and videos—especially anime, with an emphasis on Hindi-dubbed titles.

---

## Features

- Fetch playlists of Hindi-dubbed anime from YouTube channels (default: MUSA-India)
- Get detailed info about anime series via playlistId
- Retrieve all videos in a playlist with streaming URLs and thumbnails
- Utility functions for formatting and parsing YouTube data

---

## Important

- **Use your own YouTube API key!**
- Get it from [YouTube Data API v3](https://console.developers.google.com/) and set it as `YOUTUBE_API_KEY` in your `.env` file.

---

## API Routes

### 1. Home

Returns a playlist of Hindi-dubbed anime from the YouTube channel MUSA-India.  
_To use another channel, replace the channel ID in the controller file._

**Endpoint:**  
`GET https://youtubeapi-tmc9.onrender.com/api/home`

**Sample Response:**
```json
[
  {
    "playlistId": "PLpm1VVK4UL165mkmnfel5QbOhPmscdfxq",
    "youtubeTitle": "[Anime Series in Hindi] Campfire Cooking in Another World with My Absurd Skill [Hindi dub] | Muse IN",
    "engTitle": "Campfire Cooking in Another World with My Absurd Skill",
    "animeTitle": "Tondemo Skill de Isekai Hourou Meshi",
    "image": "...",
    "score": 7.64,
    "type": "TV",
    "source": "Light novel",
    "rating": "PG-13 - Teens 13 or older",
    "duration": "23 min per ep",
    "episodes": 12
  }
]
```

---

### 2. Anime Detail

Get details about an anime using its `playlistId`.

**Endpoint:**  
`GET https://youtubeapi-tmc9.onrender.com/api/anime?playlistId={playlistId}`

**Sample Response:**
```json
{
  "youtubeTitle": "I PARRY EVERYTHING |",
  "animeTitle": "Ore wa Subete wo 'Parry' suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai",
  "engTitle": "I Parry Everything",
  "playlistId": "PLpm1VVK4UL16-iDOlu33co3uSs1DyMNLN",
  "image": "...",
  "description": "...",
  "trailer": "https://www.youtube.com/embed/F6RmPmdpazw?...",
  "score": 6.89,
  "type": "TV",
  "source": "Light novel",
  "rating": "PG-13 - Teens 13 or older",
  "duration": "24 min per ep",
  "episodes": 12
}
```

---

### 3. Anime Playlist & Streaming URLs

Get all videos from a playlist using its `playlistId`.

**Endpoint:**  
`GET https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId={playlistId}`

**Sample Response:**
```json
[
  {
    "title": "I PARRY EVERYTHING - Episode 01 [Hindi Dub] | Muse IN",
    "videoId": "y7g4yMSLlbc",
    "thumbnails": {
      "default": { "url": "...", "width": 120, "height": 90 },
      "medium": { "url": "...", "width": 320, "height": 180 }
    },
    "publishedAt": "2025-03-27T04:08:49Z",
    "embedUrl": "https://www.youtube.com/embed/y7g4yMSLlbc"
  }
]
```
_Some videos may be private and may not display thumbnails or details._

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- A YouTube Data API key

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/DEVILLROYAL/youtubeAPI.git
    cd youtubeAPI
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Set up your API key:**  
   Create a `.env` file in the root directory and add your API key:
    ```
    YOUTUBE_API_KEY=YourOwnApiKey
    ```

---

## Usage Example

Import and use the main functions in your JavaScript application:

```javascript
const { searchVideos, getChannelDetails } = require('./src/youtube');

// Example: Search for videos
searchVideos('learn JavaScript').then(results => {
    console.log(results);
});

// Example: Get channel details
getChannelDetails('UC_x5XG1OV2P6uZZ5FSM9Ttw').then(details => {
    console.log(details);
});
```

---

## Project Structure

```
.
├── src/
│   └── youtube.js      # Main YouTube API utilities
├── test/               # Test scripts and examples
├── package.json
└── README.md
```

---

## Notes

- Set your YouTube API key in your `.env` file.
- To fetch anime from a different channel, update the channel ID in the controller file.
- Enjoy exploring Hindi-dubbed anime on YouTube!

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with suggestions, bug fixes, or improvements.

---

## License

[MIT](LICENSE)

---

## Contact

- GitHub: [DEVILLROYAL](https://github.com/DEVILLROYAL)
- Issues: [Submit an issue](https://github.com/DEVILLROYAL/youtubeAPI/issues)