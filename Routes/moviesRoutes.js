const express = require('express');
const router = express.Router();
const moviesController = require('./../Controllers/moviesController')

router.param('id', (req, res, next, value) => {
    console.log('Movies id is ' + value)
    next();
})

router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.createMovie)

router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router;