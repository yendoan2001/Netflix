import User from "../models/UserModel.js";
import AuthService from "../services/AuthService.js"

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
            await user.remove()
        } else {
            throw new Error('Cannot find user')
        }
    }
}
