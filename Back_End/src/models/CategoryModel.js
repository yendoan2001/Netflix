import mongoose from 'mongoose';

const {Schema} = mongoose;

export const categorySchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    });

export default mongoose.model("Category", categorySchema);