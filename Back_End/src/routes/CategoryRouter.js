import express from "express";
import CategoryController from "../controllers/CategoryController.js";

const CategoryRouter = express.Router();

CategoryRouter.get('/', CategoryController.getAllCategories)
CategoryRouter.get('/:id', CategoryController.getCategory)
CategoryRouter.post('/', CategoryController.createCategory)
CategoryRouter.put('/:id', CategoryController.updateCategory)
CategoryRouter.delete('/:id', CategoryController.deleteCategory)


export default CategoryRouter;