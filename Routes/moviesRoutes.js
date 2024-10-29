const express = require('express');
const router = express.Router();
const moviesController = require('./../Controllers/moviesController')

router.param('id', moviesController.checkId)

router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.validateBody, moviesController.createMovie)

router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router;