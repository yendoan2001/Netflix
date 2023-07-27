import express from "express";
import MovieController from "../controllers/MovieController.js";

const MovieRouter = express.Router();

MovieRouter.post('/', MovieController.importMovies)
MovieRouter.get('/', MovieController.getMovies)
MovieRouter.get('/:id', MovieController.getMovieById)
MovieRouter.get('/', MovieController.getMovies)
MovieRouter.get('/', MovieController.getMovies)

export default MovieRouter;