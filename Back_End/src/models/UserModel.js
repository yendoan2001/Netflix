import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const userSchema = new mongoose.Schema({
        fullName: {
            type: String,
            required: [true, "FullName is required"],
        },
        email: {
            type: 'string',
            required: [true, "Email is required"],
            validate: {
                validator: (email) => {
                    return /^\S+@\S+\.\S+$/.test(email);
                },
                message: props => `${props.value} is not a valid email`
            },
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must have at least 6 characters"]
        },
        image: {
            type: String,
        },
        likedMovies: {
            type: [Schema.Types.ObjectId],
            ref: "Movie"
        },
        isAdmin: {
            type: Boolean,
            default: "user"

        }
    },
    {
        timestamps: true
    });

export default mongoose.model("User", userSchema);

