This api is used to fetch any youtube channel playlist and their videos. I made it to get animes available in youtube.
!! USE YOUR OWN YOUTUBE API !!  { get it from https://developers.google.com/youtube/v3 }
replace it with the "YourOwnApiKey" from .emv file.

There are mainly three routes

Routes

Home
Provides a playlist of hindi dubbed animes available in youtube from the channel *MUSA-India.
You can easily change the youtube channel by replacing the current youtube channel id with the desired channel Id from the *CONTROLLER FILE

https://youtubeapi-tmc9.onrender.com/api/home

output- [
        {
        "playlistId": "PLpm1VVK4UL165mkmnfel5QbOhPmscdfxq",
        "youtubeTitle": "[Anime Series in Hindi] Campfire Cooking in Another World with My Absurd Skill [Hindi dub] | Muse IN",
        "engTitle": "Campfire Cooking in Another World with My Absurd Skill",
        "animeTitle": "Tondemo Skill de Isekai Hourou Meshi",
        "image": "https://cdn.myanimelist.net/images/anime/1661/131889l.jpg",
        "score": 7.64,
        "type": "TV",
        "source": "Light novel",
        "rating": "PG-13 - Teens 13 or older",
        "duration": "23 min per ep",
        "episodes": 12
        },
        {
        "playlistId": "PLpm1VVK4UL15P_R9lrfR573NWjaI3PhBM",
        "youtubeTitle": "(Limited-time) Sword Art Online [Hindi Dub] | Muse IN",
        "engTitle": "Sword Art Online",
        "animeTitle": "Sword Art Online",
        "image": "https://cdn.myanimelist.net/images/anime/11/39717l.jpg",
        "score": 7.22,
        "type": "TV",
        "source": "Light novel",
        "rating": "PG-13 - Teens 13 or older",
        "duration": "23 min per ep",
        "episodes": 25
        },
        {
        "playlistId": "PLpm1VVK4UL15iS_b-3ZAfIt2wDCgiJSzL",
        "youtubeTitle": "Junji Ito Collection [Hindi dub] | Muse IN",
        "engTitle": "Junji Ito Collection",
        "animeTitle": "Itou Junji: Collection",
        "image": "https://cdn.myanimelist.net/images/anime/7/88366l.jpg",
        "score": 6.55,
        "type": "TV",
        "source": "Manga",
        "rating": "R - 17+ (violence & profanity)",
        "duration": "24 min per ep",
        "episodes": 12
        },
        {
        "playlistId": "PLpm1VVK4UL17sQvpyw2ou6aG43s3NU09W",
        "youtubeTitle": "[Anime Series in Hindi]  That Time I Got Reincarnated as a Slime [Hindi dub] | Muse IN",
        "engTitle": "That Time I Got Reincarnated as a Slime",
        "animeTitle": "Tensei shitara Slime Datta Ken",
        "image": "https://cdn.myanimelist.net/images/anime/1069/123309l.jpg",
        "score": 8.14,
        "type": "TV",
        "source": "Manga",
        "rating": "PG-13 - Teens 13 or older",
        "duration": "23 min per ep",
        "episodes": 24
        }
        ]

Anime Detail
Get details of anime available in youtube with their playlistId.

https://youtubeapi-tmc9.onrender.com/api/anime?playlistId={playlistId}

output- [
        {
        "youtubeTitle": "I PARRY EVERYTHING  |",
        "animeTitle": "Ore wa Subete wo \"Parry\" suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai",
        "engTitle": "I Parry Everything",
        "playlistId": "PLpm1VVK4UL16-iDOlu33co3uSs1DyMNLN",
        "image": "https://cdn.myanimelist.net/images/anime/1747/143101l.jpg",
        "description": "The Kingdom of Clays faces a dire crisis: an assassination attempt has just been made on its own Princess Lynneburg, and its neighboring countries eye the aftermath like starving vultures, plotting           the Kingdom's downfall. The ensuing conflict will shape the face of the continent for centuries to come...but Noor doesn't have a clue about any of that! Having freshly arrived at the royal capital after over a             decade of rigorous, isolated training at his mountain home, he's dead set on achieving his childhood dream of becoming an adventurer, even if the only skills he possesses are useless ones. Sure, he can \"Parry\"            thousands of swords in the span of a single breath, but everybody knows you need more than that if you want to be an adventurer! Our hero's road to making his dream come true will be long(?) and arduous(?)—but if           there's one thing Noor's not afraid of, it's some good ol' fashioned hard work!\n\n(Source: J-Novel Club)",
        "trailer": "https://www.youtube.com/embed/F6RmPmdpazw?enablejsapi=1&wmode=opaque&autoplay=1",
        "score": 6.89,
        "type": "TV",
        "source": "Light novel",
        "rating": "PG-13 - Teens 13 or older",
        "duration": "24 min per ep",
        "episodes": 12
        }
        ]

Anime Playlist and straming url
Get any playlist with video url from youtube just with the playlistId.

https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId={playlistId}

output-   [
          {
          "title": "I PARRY EVERYTHING - Episode 01 [Hindi Dub] | Muse IN",
          "videoId": "y7g4yMSLlbc",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/y7g4yMSLlbc/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/y7g4yMSLlbc/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/y7g4yMSLlbc/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/y7g4yMSLlbc/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/y7g4yMSLlbc/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T04:08:49Z",
          "embedUrl": "https://www.youtube.com/embed/y7g4yMSLlbc"
          },
          {
          "title": "I PARRY EVERYTHING - Episode 02 [Hindi Dub] | Muse IN",
          "videoId": "M7j9QOD7Bbc",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/M7j9QOD7Bbc/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/M7j9QOD7Bbc/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/M7j9QOD7Bbc/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/M7j9QOD7Bbc/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/M7j9QOD7Bbc/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T06:53:37Z",
          "embedUrl": "https://www.youtube.com/embed/M7j9QOD7Bbc"
          },
          {
          "title": "I PARRY EVERYTHING - Episode 03 [Hindi Dub] | Muse IN",
          "videoId": "pm5zJbwTyaY",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/pm5zJbwTyaY/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/pm5zJbwTyaY/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/pm5zJbwTyaY/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/pm5zJbwTyaY/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/pm5zJbwTyaY/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T04:03:01Z",
          "embedUrl": "https://www.youtube.com/embed/pm5zJbwTyaY"
          },
          {
          "title": "I PARRY EVERYTHING - Episode 04 [Hindi Dub] | Muse IN",
          "videoId": "BPfMWo-6TJM",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/BPfMWo-6TJM/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/BPfMWo-6TJM/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/BPfMWo-6TJM/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/BPfMWo-6TJM/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/BPfMWo-6TJM/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T04:03:18Z",
          "embedUrl": "https://www.youtube.com/embed/BPfMWo-6TJM"
          },
          {
          "title": "I PARRY EVERYTHING - Episode 05 [Hindi Dub] | Muse IN",
          "videoId": "OkNrqVofQo4",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/OkNrqVofQo4/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/OkNrqVofQo4/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/OkNrqVofQo4/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/OkNrqVofQo4/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/OkNrqVofQo4/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T04:02:45Z",
          "embedUrl": "https://www.youtube.com/embed/OkNrqVofQo4"
          },
          {
          "title": "I PARRY EVERYTHING - Episode 06 [Hindi Dub] | Muse IN",
          "videoId": "TYHstMJdqpQ",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/TYHstMJdqpQ/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/TYHstMJdqpQ/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/TYHstMJdqpQ/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/TYHstMJdqpQ/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/TYHstMJdqpQ/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T04:03:35Z",
          "embedUrl": "https://www.youtube.com/embed/TYHstMJdqpQ"
          },
          {
          "title": "I PARRY EVERYTHING - Episode 07 [Hindi Dub] | Muse IN",
          "videoId": "MPa2z6vV4TI",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/MPa2z6vV4TI/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/MPa2z6vV4TI/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/MPa2z6vV4TI/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/MPa2z6vV4TI/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/MPa2z6vV4TI/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T06:53:16Z",
          "embedUrl": "https://www.youtube.com/embed/MPa2z6vV4TI"
          },
          {
          "title": "I PARRY EVERYTHING - Episode 08 [Hindi Dub] | Muse IN",
          "videoId": "A21cmOnGmRI",
          "thumbnails": {
          "default": {
          "url": "https://i.ytimg.com/vi/A21cmOnGmRI/default.jpg",
          "width": 120,
          "height": 90
          },
          "medium": {
          "url": "https://i.ytimg.com/vi/A21cmOnGmRI/mqdefault.jpg",
          "width": 320,
          "height": 180
          },
          "high": {
          "url": "https://i.ytimg.com/vi/A21cmOnGmRI/hqdefault.jpg",
          "width": 480,
          "height": 360
          },
          "standard": {
          "url": "https://i.ytimg.com/vi/A21cmOnGmRI/sddefault.jpg",
          "width": 640,
          "height": 480
          },
          "maxres": {
          "url": "https://i.ytimg.com/vi/A21cmOnGmRI/maxresdefault.jpg",
          "width": 1280,
          "height": 720
          }
          },
          "publishedAt": "2025-03-27T06:53:29Z",
          "embedUrl": "https://www.youtube.com/embed/A21cmOnGmRI"
          },
          {
          "title": "Private video",
          "videoId": "v0JwO5B1VoY",
          "thumbnails": {},
          "publishedAt": "2025-03-27T04:02:57Z",
          "embedUrl": "https://www.youtube.com/embed/v0JwO5B1VoY"
          },
          {
          "title": "Private video",
          "videoId": "ZDu2ybf6LPA",
          "thumbnails": {},
          "publishedAt": "2025-03-27T04:03:00Z",
          "embedUrl": "https://www.youtube.com/embed/ZDu2ybf6LPA"
          },
          {
          "title": "Private video",
          "videoId": "z7YQulh67Kc",
          "thumbnails": {},
          "publishedAt": "2025-03-27T04:03:12Z",
          "embedUrl": "https://www.youtube.com/embed/z7YQulh67Kc"
          },
          {
          "title": "Private video",
          "videoId": "wtmA2_PAiGs",
          "thumbnails": {},
          "publishedAt": "2025-03-27T04:06:57Z",
          "embedUrl": "https://www.youtube.com/embed/wtmA2_PAiGs"
          }
          ]

