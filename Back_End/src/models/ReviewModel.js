import mongoose from 'mongoose';

const {Schema} = mongoose;

const reviewSchema = new mongoose.Schema({
        userId: {
            type: [Schema.Types.ObjectId],
            ref: "User"
        },
        userName: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    });

export default mongoose.model("Review", reviewSchema);