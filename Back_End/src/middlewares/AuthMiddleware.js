import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";


export default class AuthMiddleware {
    static async protect(req, res, next) {
        let token = null;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            try {
                token = req.headers.authorization.split(" ")[1]
                const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
                req.user = await User.findById(decoded._id).select('-password')
                next()
            } catch (err) {
                res.status(401).json({
                    error: err.message
                })
            }
        }
        if (!token) {
            throw new Error('Not authorized, no accessToken')
        }
    }
}
