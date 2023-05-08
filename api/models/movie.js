const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//esquema coleccion
const movieSchema = new Schema(
  {
    //nombre{type:Schema,types.ObjectId,required: true}//
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number,required: false },
    type: { type: String, required: true },
    image: { type: String, required: false, default: '' }
  },
  // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;