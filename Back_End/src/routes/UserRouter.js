import express from "express";
import UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const UserRouter = express.Router();

UserRouter.put('/', AuthMiddleware.protect, UserController.updateUser)
UserRouter.delete('/', AuthMiddleware.protect, UserController.deleteUser)
export default UserRouter;