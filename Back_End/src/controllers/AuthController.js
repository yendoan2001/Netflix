import AuthService from '../services/AuthService.js'
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";


export default class AuthController {
    static async login(req, res) {
        try {
            let {email, password} = req.body;
            const user = await AuthService.login(email, password)
            res.status(200).json({
                message: 'Login successfully',
                accessToken: user[1]
            })
        } catch (err) {
            res.status(500).json({
                error: err.message
            })

        }
    }

    static async register(req, res) {
        try {
            const {fullName, email, password} = req.body
            const user = await AuthService.register(fullName, email, password)
            res.status(201).json({
                message: "Created user successfully",
                accessToken: user[1]
            })
        } catch (err) {
            res.status(500).json({
                error: err.message
            })
        }

    }

}