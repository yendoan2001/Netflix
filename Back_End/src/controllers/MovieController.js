import Movie from '../models/MovieModel.js'
import {MoviesData} from "../fake_data/Movies.js";
import MovieService from "../services/MovieService.js";

export default class MovieController {
    static async importMovies(req, res) {
        try {
            await Movie.deleteMany()
            const movies = await Movie.insertMany(MoviesData)
            res.json(movies)
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async getMovies(req, res) {
        try {
            const {category, time, language, rate, year, search} = req.query
            const pageNumber = Number(req.query.pageNumber) || 1
            const result = await MovieService.getMovies(category, time, language, rate, year, search, pageNumber)
            res.json({
                movies: result[0],
                page: result[1],
                pages: Math.ceil(result[2] / result[3]),
                totalMovies: result[2]
            })

        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async getMovieById(req, res) {
        try {
            const movie = await Movie.findById(req.params.id)
            if (movie) {
                res.json({
                    movie: movie
                })
            } else {
                res.json({
                    error: 'Movie not found'
                })
            }
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async getTopRatedMovies(req, res) {
        try {
            const movies = await Movie.find({rates: -1})
            if (movies) {
                res.json({
                    movies: movies
                })
            } else {
                res.json({
                    error: 'Movie not found'
                })
            }
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async getRandomMovies(req, res) {
        try {
            const movies = await Movie.aggregate([{$sample: {size: 8}}])
            if (movies) {
                res.json({
                    movies: movies
                })
            } else {
                res.json({
                    error: 'Movies not found'
                })
            }

        } catch (e) {
            res.json({
                error: err.message
            })
        }
    }
}