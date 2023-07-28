import express from "express";
import MovieController from "../controllers/MovieController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const MovieRouter = express.Router();

MovieRouter.post('/import', MovieController.importMovies)
MovieRouter.get('/', MovieController.getMovies)
MovieRouter.get('/:id', MovieController.getMovieById)
MovieRouter.get('/rated/top', MovieController.getTopRatedMovies)
MovieRouter.get('/random/all', MovieController.getRandomMovies)
MovieRouter.post('/random/all', MovieController.getRandomMovies)
MovieRouter.post('/review/:id', AuthMiddleware.protect, MovieController.createMovieReview)
MovieRouter.patch('/:id', MovieController.updateMovie)
MovieRouter.delete('/:id', MovieController.deleteMovie)
MovieRouter.delete('/', MovieController.deleteAllMovies)
MovieRouter.post('/', AuthMiddleware.protect, MovieController.createMovie)

export default MovieRouter;