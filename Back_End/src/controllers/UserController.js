import UserService from "../services/UserService.js";

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
}