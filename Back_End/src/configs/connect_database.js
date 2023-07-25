import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongo db connected`);
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;