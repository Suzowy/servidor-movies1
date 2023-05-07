const Movie = require("../models/Movie");
// crear las funciones de conexion con la BD

// funcion para buscar en BD todas las pelis
const getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find(req.body);
    return res.status(200).json(allMovies);
  } catch (error) {
    console.log(error);
  }
};
// funcion para añadir una nueva peli la BD
const setNewMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(200).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};
// /id, los nuevos datos 
const updateMovie = async (req, res) => {
  try {
    //por los params recibo el id
    const { id } = req.params;
    console.log(id);
    // por el body recibo toda la informacion
    const putMovie = new Movie(req.body);
    //asignarle un id 
    putMovie._id = id;
    // buscamos  por id y actualizamos el documento
    const updateMov = await Movie.findByIdAndUpdate(id, putMovie, {
      new: true,
    });
    return res.status(200).json(updateMov);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMov = await Movie.findByIdAndDelete(id);
    //Controlar que el elemento a eliminar existe, y sino existe devuelvo un mensaje y status 404
    if (!deleteMov) {
      return res.status(404).json({ message: "Pelicula no encontrada" });
    }
    return res.status(200).json(deleteMov);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const filterByDirector = async (req, res) => {
  try {

    const { directorSearch } = req.query;
    const movieDirector = await Movie.find({
      director: directorSearch.toLowerCase()
    });

    return res.status(200).json(movieDirector);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const filterByTitle = async (req, res) => {
  try {
    let { titleSearch, sort } = req.query;
    sort = sort === "asc" ? 1 : -1;
    const movieTitle = await Movie.find({
      title: titleSearch,
    }).sort({
      title: sort,
    });
    return res.status(200).json(movieTitle);
  } catch (error) { }
};
const filterByYear = async (req, res) => {
  try {

    const { yearSearch } = req.query;
    const movieYear = await Movie.find({
      year: yearSearch()
    });

    return res.status(200).json(movieYear);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllMovies,
  setNewMovie,
  updateMovie,
  deleteMovie,
  filterByTitle,
  filterByDirector,
  filterByYear
};
