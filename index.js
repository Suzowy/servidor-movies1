const express = require('express');
const {connect} = require('./utils/db');
const server = express();
const dotenv = require ('dotenv');
const cloudinary = require ('cloudinary').v2;
const movieRouter = require ('./api/routes/movies.routes')
const cinemasRouter = require('./api/routes/cinema.routes')
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});


const PORT = process.env.PORT || 3000;
connect();
server.use(express.json());

const Movie = require('./api/models/Movie');

server.use('/movies', movieRouter);
server.use('/cinema', cinemasRouter);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
