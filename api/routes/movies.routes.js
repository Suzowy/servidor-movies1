
const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  setNewMovie,
  updateMovie,
  deleteMovie,
  filterByDirector,
  filterByTitle,
  filterByYear,
} = require('../controllers/movie.controller');

router.get('/', getAllMovies);

//añadir una nueva peli
router.post('/', setNewMovie);

//Modifica una peli
router.put('/:id', updateMovie);

//Elimina a una peli
router.delete('/:id', deleteMovie);

//Filtrar por director
router.get('/director', filterByDirector);

//filter por titulo
router.get('/Title', filterByTitle);

router.get('/Year', filterByYear); 

module.exports = router;