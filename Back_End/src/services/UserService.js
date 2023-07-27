import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export default class UserService {
    static async updateUser(_id, fullName, email, image) {
        const user = await User.findById(_id)
        if (user) {
            user.fullName = fullName
            user.email = email
            user.image = image
            await user.save()
        } else {
            throw new Error('User not found')
        }
        return user
    }

    static async deleteUser(_id) {
        const user = await User.findById(_id)
        if (user) {
            if (user.isAdmin) {
                throw new Error('Cannot delete admin user')
            }
            await user.deleteOne();
        } else {
            throw new Error('Cannot find user')
        }
    }

    static async changePassword(_id, oldPassword, newPassword) {
        const user = await User.findById(_id);
        if (user && (await bcrypt.compare(oldPassword, user.password))) {
            const newHashPassword = await bcrypt.hash(newPassword, 10)
            if (oldPassword === newPassword) {
                throw new Error("The same password")
            } else {
                user.password = newHashPassword
                await user.save()
            }

        } else {
            throw new Error('Invalid old password')
        }
    }

    static async addLikedMovies(_id, movieId) {
        const user = await User.findById(_id);
        if (user) {
            const isMovieLiked = user.likedMovies.includes(movieId);
            if (isMovieLiked) {
                throw new Error(`Movie is already`)
            } else {
                user.likedMovies.push(movieId)
                await user.save()
            }
        } else {
            throw new Error('User not found')
        }
    }

    static async deleteLikedMovies(_id) {
        console.log(_id)
        const user = await User.findById(_id);

        if (user) {
            user.likedMovies = [];
            await user.save()
            return user
        } else {
            throw new Error('User not found')
        }
    }
}
