const express = require('express');
const morgan = require('morgan')
const moviesRouter = require('./Routes/moviesRoutes.js')

let app = express();
app.use(express.json())
app.use(morgan('dev'))
// custom middleware
app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next();
})
app.use('/api/v1/movies', moviesRouter)


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})

