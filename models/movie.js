const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//esquema coleccion
const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number,required: false },
    type: { type: String, required: true },
  },

  {
collection: 'movies',
  }

);

const movies = mongoose.model('movies', movieSchema);
module.exports = movies;