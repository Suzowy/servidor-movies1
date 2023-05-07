const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//esquema coleccion
const cinemaSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    movies: [{ type: mongoose.Types.ObjectId, ref: 'Movie'}],
  },
  {
    timestamps: true,
  }
);

const cinema = mongoose.model('cinema', cinemaSchema);
module.exports = cinema;