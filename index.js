const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

const homeRoute = require('./routes/homeRoutes');
const animeRoute = require('./routes/detailRoutes');
const playlistRoute = require('./routes/playlistRoutes');
const testRoute = require('./routes/testRoute');

app.use('/api/home', homeRoute);
app.use('/api/anime', animeRoute);
app.use('/api/playlist', playlistRoute);
app.use('/test', testRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});