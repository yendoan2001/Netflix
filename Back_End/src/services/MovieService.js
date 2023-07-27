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
}
