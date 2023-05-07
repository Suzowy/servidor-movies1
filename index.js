const express = require('express');
const {connect} = require('./utils/db');
const server = express();
const dotenv = require ('dotenv');
const movieRouter = require ('./api/routes/movies.routes')
const cinemasRouter = require('./api/routes/cinema.routes')
dotenv.config();
const PORT = process.env.PORT || 3000;
connect();
server.use(express.json());

const Movie = require('./api/models/Movie');

server.use('/movies', movieRouter);
server.use('/cinema', cinemasRouter);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
