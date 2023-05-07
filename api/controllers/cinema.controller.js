
const Cinema = require("../models/cinema");
const getCinemas = async (req, res) => {
    try {
      const allCinemas = await Cinema.find.populate('movies');
      return res.status(200).json(allCinemas);
    } catch (error) {
      console.log(error);
    }
  };

  const setNewCinema = async (req, res) => {
    try {
      const newCinema = new Cinema(req.body);
      const createdCinema = await newCinema.save();
      return res.status(200).json(createdCinema);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const updateCinema = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const putCinema = new Cinema(req.body);
      putCinema._id = id;
      const updateCin = await Cinema.findByIdAndUpdate(id, putCinema, {
        new: true,
      });
      return res.status(200).json(updateMov);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  module.exports = {
    getCinemas,
    setNewCinema,
    updateCinema
};