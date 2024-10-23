const express = require('express');
let fs = require('fs')
let movies = JSON.parse(fs.readFileSync('./Files/movies.json'));
console.log("Movies: ", movies)

const getAllMovies = (req, res) => {
    res.status(200).json(
        {
            status: "success",
            time: req.requestedAt,
            data: {
                movies: movies
            }
        }
    )
}
const createMovie = (req, res) => {
    let moviesLength = movies.length - 1
    const newId = movies[moviesLength].id + 1;
    const newMovie = Object.assign({ id: newId }, req.body)
    console.log(newId)
    movies.push(newMovie)
    fs.writeFile('./Files/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movies: newMovie
            }
        })
    })
    res.send('Created');
}
const getMovie = (req, res) => {
    const id = req.params.id * 1;
    let movie = movies.find(el => el.id === id)

    //res.send('Test success');
    if (movie) {
        res.status(200).json({
            status: 'success',
            data: { movie }
        })
    }
    else {
        res.status(404).json({
            status: 'fail',
            message: 'Movie is not found'
        })
    }

}
const updateMovie = (req, res) => {
    let id = req.params.id * 1;
    let movieToUpdate = movies.find(el => el.id === id);
    let index = movies.indexOf(movieToUpdate)
    if (!movieToUpdate) {
        return res.status(404).json({ status: 'Fail', message: 'Movie is not found' });
    }
    const updatedMoviObj = Object.assign(movieToUpdate, req.body);
    movies[index] = movieToUpdate
    fs.writeFile('./Files/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: 'success',
            data: { movieToUpdate }
        })
    })
}

const deleteMovie = (req, res) => {
    const id = parseInt(req.params.id)
    // console.log("id", id)
    const movieToDelete = movies.find(el => el.id === id);
    if (!movieToDelete) {
        return res.status(404).json({ status: 'Fail', message: 'Movie is not found' });
    }
    const index = movies.indexOf(movieToDelete);
    movies.splice(index, 1);
    fs.writeFile('./Files/movies.json', JSON.stringify(movies), (err) => {
        res.status(204).json({
            status: 'success',
            data: null
        })
    })
}

const router = express.Router();

router.route('/')
    .get(getAllMovies)
    .post(createMovie)

router.route('/:id')
    .get(getMovie)
    .patch(updateMovie)
    .delete(deleteMovie)

module.exports = router;