const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model.js');

//const Movie = require('../models/Movie.model.js');

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get('/', (req, res, next) =>
  res.json({ success: true, name: 'lab-express-cinema' })
)

//////Iteration 2 //// 
router.get('/movies', async (req, res, next) => {
  try {
    const  moviesinfo= await Movie.find({}).select({title:1,director:1});
    res.status(200).json(moviesinfo);
  } catch (error) {
    next(error);
  }
});

/////Iteration 3
router.get('/movies/:id', async (req, res, next) => {
  try {
    movieId = req.params.id;
    const findMovie = await Movie.findByIdAndUpdate(movieId, req.body);
    res.json(findMovie);
  } catch (error) {
    next(error);
  }
});
module.exports = router;

// router.get('/movies', async (req, res, next) => {
//   try {
//       const movies = req.params.movies
//       const moviesinfo = await Movie.select('title','director')
//       res.status(200).json(moviesinfo)
//   } catch (err) {
//       next(err)
//   }
// })

module.exports = router
