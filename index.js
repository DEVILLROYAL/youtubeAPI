const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const youtubeRoutes = require('./routes/youtubeRoutes');
// You can also import animeRoutes if separated
// const animeRoutes = require('./routes/animeRoutes');

// Use routes
app.use('/api/hindi-dub-anime', youtubeRoutes);  // Combine logic in youtubeRoutes
app.use('/api/playlist', youtubeRoutes);
app.use('/api/anime-detail', youtubeRoutes);         // Or, create a separate route for playlist

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});