import UserService from "../services/UserService.js";
import User from "../models/UserModel.js";


export default class UserController {
    static async updateUser(req, res) {
        try {
            const {fullName, email, image} = req.body
            const _id = req.user._id
            await UserService.updateUser(_id, fullName, email, image)
            res.status(201).json({
                message: "Updated successfully",
            })
        } catch (err) {
            res.status(500).json({
                error: err.message
            })
        }
    }

    static async deleteUser(req, res) {
        try {
            const _id = req.params.id
            await UserService.deleteUser(_id)
            res.json({
                message: "Deleted successfully",
            })
        } catch (err) {
            res.json({
                message: err.message
            })
        }
    }

    static async changePassword(req, res) {
        const {oldPassword, newPassword} = req.body;
        try {
            const _id = req.user._id;
            await UserService.changePassword(_id, oldPassword, newPassword);
            res.json({
                message: "Change password successfully",
            })

        } catch (e) {
            res.status(400).json({
                error: e.message
            })
        }
    }

    static async getLikedMovies(req, res) {
        try {
            const _id = req.user._id;
            const user = await User.findById(_id)
            if (user) {
                res.json(user.likedMovies)
            } else {
                res.json({error: 'User not found'})
            }
        } catch (e) {
            res.status(400).json({
                error: e.message
            })
        }
    }

    static async addLikedMovies(req, res) {
        const {movieId} = req.body
        try {
            const _id = req.user._id;
            await UserService.addLikedMovies(_id, movieId);
            res.json({success: "Movie added successfully"})
        } catch (e) {
            res.json({error: e.message})
        }
    }

    static async deleteLikedMovies(req, res) {
        const _id = req.user._id;
        try {
            const user = await UserService.deleteLikedMovies(_id);
            res.json({
                message: "All likedMovies deleted successfully",
                user: user
            })
        } catch (e) {
            res.json({error: e.message})
        }
    }

    static async getUsers(req, res) {
        try {
            const users = await User.find({})
            res.json({users: users})
        } catch (e) {
            res.json({error: e.message})
        }
    }

}