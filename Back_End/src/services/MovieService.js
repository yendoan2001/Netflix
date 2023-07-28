import bcrypt from "bcrypt";
import Movie from "../models/MovieModel.js";

export default class MovieService {
    static async getMovies(category, time, language, rate, year, search, pageNumber) {
        let query = {
            ...(category && {category: category}),
            ...(time && {time: time}),
            ...(language && {language: language}),
            ...(rate && {rate: rate}),
            ...(year && {year: year}),
            ...(search && {name: {$regex: search, $options: 'i'}})
        }
        const page = pageNumber
        const limit = 2
        const skip = (pageNumber - 1) * limit
        const count = await Movie.countDocuments(query)
        const movies = await Movie.find(query)
            .sort({createdAt: -1})
            .skip(skip)
            .limit(limit)
        return [movies, page, count, limit]
    }

    static async createMovieReview(movie_id, user_id, user_fullName, user_image, rating, comment) {
        const movie = await Movie.findById(movie_id)
        if (movie) {
            const alreadyReview = await movie.reviews.find(r => r.userId.toString() === user_id.toString());
            if (alreadyReview) {
                throw new Error(`You have already reviewed`)
            } else {
                const review = {
                    userId: user_id,
                    userName: user_fullName,
                    userImage: user_image,
                    rating: Number(rating),
                    comment: comment
                }
                movie.reviews.push(review)
                movie.numberOfReviews = movie.reviews.length
                movie.rates = movie.reviews.reduce((acc, item) => item.rating + acc, 0) / movie.reviews.length
                await movie.save()
            }

        }
    }
}
