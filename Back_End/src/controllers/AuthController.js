import AuthService from '../services/AuthService.js'

export default class AuthController {
    static async login(req, res) {
        try {
            let {email, password} = req.body;
            await AuthService.login(email, password)
            res.status(200).json({
                message: 'Login successfully'
            })
        } catch (err) {
            res.status(500).json({
                error: err.message
            })

        }
    }

    static async register(req, res) {
        try {
            await AuthService.register(req.body)
            res.status(201).json({
                message: "Created user successfully"
            })
        } catch (err) {
            res.status(500).json({
                error: err.message
            })
        }

    }

}