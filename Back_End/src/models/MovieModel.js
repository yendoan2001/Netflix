import mongoose from 'mongoose';
import {reviewSchema} from "./ReviewModel.js";

const {Schema} = mongoose;

const movieSchema = new mongoose.Schema({
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        titleImage: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        time: {
            type: Number,
            required: true
        },
        video: {
            type: String,
        },
        rates: {
            type: Number,
            required: true,
            default: 0
        },
        numberOfReviews: {
            type: String,
            required: true,
            default: 0
        },
        reviews: [reviewSchema],
        cast: [
            {
                name: {type: String, required: true},
                image: {type: String, required: true},
            }
        ]
    },
    {
        timestamps: true
    });

export default mongoose.model("Movie", movieSchema);