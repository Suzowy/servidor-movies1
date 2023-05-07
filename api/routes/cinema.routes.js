const express = require('express');
const router = express.Router();

const {
    getCinemas,
    setNewCinema,
    updateCinema
} = require('../controllers/cinema.controller');

router.get('/', getCinemas);

router.post('/', setNewCinema);

router.put('/:id', updateCinema);

module.exports = router;