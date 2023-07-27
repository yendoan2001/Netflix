import express from "express";
import UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const UserRouter = express.Router();

UserRouter.put('/', AuthMiddleware.protect, UserController.updateUser)
UserRouter.delete('/:id', AuthMiddleware.protect, AuthMiddleware.isAdmin, UserController.deleteUser)
UserRouter.get('/', AuthMiddleware.protect, AuthMiddleware.isAdmin, UserController.getUsers)
UserRouter.put('/password', AuthMiddleware.protect, UserController.changePassword)
UserRouter.get('/favorite', AuthMiddleware.protect, UserController.getLikedMovies)
UserRouter.post('/favorite', AuthMiddleware.protect, UserController.addLikedMovies)
UserRouter.delete('/favorite', AuthMiddleware.protect, UserController.deleteLikedMovies)
export default UserRouter;