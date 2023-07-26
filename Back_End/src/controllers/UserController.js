import UserService from "../services/UserService.js";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt"


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
            const _id = req.user._id
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

    static async changePassword(req, res, next) {
        const {oldPassword, newPassword} = req.body;
        try {
            const user = await User.findById(req.user._id);
            if (user && (await bcrypt.compare(oldPassword, user.password))) {
                const newHashPassword = await bcrypt.hash(newPassword, 10)
                user.password = newHashPassword
                await user.save()
                res.json({
                    message: "Change password successfully"
                })
            } else {
                res.status(401)
                throw new Error('Invalid old password')
            }
        } catch (e) {
            res.status(400).json({
                error: e.message
            })
        }
    }
}