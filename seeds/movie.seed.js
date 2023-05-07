
const mongoose = require('mongoose');
const Movie = require('../api/models/Movie');
const dotenv = require('dotenv');
dotenv.config();

const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    type: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    type: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    type: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    type: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    type: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    type: 'Comedia romántica',
  },
];
const movieDocu = movies.map(movie => new Movie(movie));
//momgoose.connect(proces.env.uri)
  mongoose.connect('mongodb://localhost:3000/servidor-movies1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // obtendremos un array con todas las pelis de la db
  .then(async () => {
    const allMovies = await Movie.find();
    // Si existen previamente, dropearemos la colección
    if (allMovies.length) {
      await Movie.collection.drop(); 
    }
  })
  // Una vez vaciada la db , usaremos el array Docu
	// para llenar nuestra base de datos con todas las.
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Movie.insertMany(movieDocu);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
  
  
