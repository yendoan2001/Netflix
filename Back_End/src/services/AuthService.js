import User from "../models/UserModel.js";
import bcrypt from "bcrypt"

export default class AuthService {
    static async login(email, password) {
        const user = await User.findOne({email: email})
        if (!user) {
            throw new Error('This user does not exist')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new Error('Password is incorrect')
        }
        return user
    }


    static async register(fullName, email, password) {
        const user = await User.findOne({email: email})
        if (user) {
            throw new Error(`This account is already`)
        }
        const passwordHash = await bcrypt.hash(password, 10);
        user.fullName = fullName
        user.email = email
        user.password = passwordHash
        await user.save()
        return user
    }
}