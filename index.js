const express = require('express');
const cors = require('cors');
const { connect } = require('./utils/db');
const Movie = require('./models/movie');
const router = express.Router();

// ejecuto express para crear un nuevo servidor
const server = express();
connect(); // conexion con la BD
server.use(cors());
server.use(express.json());
const PORT = 3000;

//todas las pelis
router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies)
    } catch (err) {
        return res.status(500).json(err);
    }
});
//por id
router.get('/movies/id/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json('no existe ninguna pelicula con este id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});
//por director
router.get('/movies/director/:director', async (req, res) => {
    const { director } = req.params;

    try {
        const movieBydirector = await Movie.find({ director });
        return res.status(200).json(movieByDirector);
    } catch (err) {
        return res.status(500).json(err);
    }
});


//por titulo
router.get('/movies/title/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const movieByTitle = await Movie.find({ title });
        return res.status(200).json(movieByTitle);
    } catch (err) {
        return res.status(500).json(err);
    }
});
//por tipo
router.get('/movies/type/:type', async (req, res) => {
    const { type } = req.params;

    try {
        const movieByType = await Movie.find({ type });
        return res.status(200).json(movieByType);
    } catch (err) {
        return res.status(500).json(err);
    }
});
//por año
router.get('/movies/year/:year', async (req, res) => {
    const { year } = req.params;

    try {
        const movieByYear = await Movie.find({ year: { $gt: year } });
        return res.status(200).json(movieByYear);
    } catch (err) {
        return res.status(500).json(err);
    }
});

server.use('/', router);


server.listen(PORT, () => {
    console.log(`Url del servidor : http://localhost:${PORT}`);
});

