import User from "../models/UserModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


export default class AuthService {
    static async login(email, password) {
        const user = await User.findOne({email: email})
        if (!user) {
            throw new Error('This user does not exist')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        const accessToken = await this.generateToken(user)
        if (!isMatch) {
            throw new Error('Password is incorrect')
        }
        return [user, accessToken]
    }


    static async register(fullName, email, password) {
        const isExistUser = await User.findOne({email: email})
        if (isExistUser) {
            throw new Error(`This account is already`)
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({fullName, email, passwordHash});
        user.fullName = fullName
        user.email = email
        user.password = passwordHash
        user.isAdmin = false;
        await user.save()
        const accessToken = await this.generateToken(user)
        return [user, accessToken]
    }

    static async generateToken(user) {
        let {_id, fullName, email, isAdmin} = user;
        let payload = {_id, fullName, email, isAdmin};
        return jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, {expiresIn: "1y"}
        );
    }
}