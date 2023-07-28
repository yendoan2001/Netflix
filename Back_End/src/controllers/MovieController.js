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
            const movies = await Movie.find().sort({rates: -1})
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
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async createMovieReview(req, res) {
        try {
            const movie_id = req.params.id
            const user_id = req.user._id
            const user_fullName = req.user.fullName
            const user_image = req.user.image
            const {rating, comment} = req.body
            await MovieService.createMovieReview(movie_id, user_id, user_fullName, user_image, rating, comment)
            res.json({
                message: 'Created movie review successfully'
            })
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async updateMovie(req, res) {
        try {
            const movie = await Movie.findById(req.params.id)
            const {name, desc, titleImage, image, category, language, year, time, video, casts} = req.body
            if (movie) {
                movie.name = name || movie.name
                movie.desc = desc || movie.desc
                movie.titleImage = titleImage || movie.titleImage
                movie.image = image || movie.image
                movie.category = category || movie.category
                movie.language = language || movie.language
                movie.year = year || movie.year
                movie.time = time || movie.time
                movie.video = video || movie.video
                movie.casts = casts || movie.casts
                await movie.save()
                res.json({
                    message: 'Update movie successfully'
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

    static async deleteMovie(req, res) {
        try {
            const movie = await Movie.findById(req.params.id)
            if (movie) {
                await movie.deleteOne()
                res.json({
                    message: 'Movie deleted successfully'
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

    static async deleteAllMovies(req, res) {
        try {
            await Movie.deleteMany({})
            res.json({
                message: 'All movies are deleted successfully'
            })

        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async createMovie(req, res) {
        try {
            const {name, desc, titleImage, image, category, language, year, time, video, casts} = req.body
            const userId = req.user._id
            const movie = await new Movie({
                name: name,
                desc: desc,
                titleImage: titleImage,
                image: image,
                category: category,
                language: language,
                year: year,
                time: time,
                video: video,
                casts: casts,
                userId: userId
            })
            if (movie) {
                await movie.save()
                res.json({
                    message: 'Movie saved successfully'
                })
            } else {
                res.json({
                    error: 'Movie could not be created'
                })
            }
            res.json({
                message: 'Movie created successfully'
            })


        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }
}