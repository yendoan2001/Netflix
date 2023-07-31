import Category from "../models/CategoryModel.js";

export default class CategoryController {
    static async getAllCategories(req, res, next) {
        try {
            const categories = await Category.find({})
            res.json({
                categories: categories
            })

        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async createCategory(req, res, next) {
        try {
            const category = await new Category({
                title: req.body.title,
            })
            await category.save()
            res.json({
                message:'Category is created successfully',
                category: category
            })
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async getCategory(req, res, next) {
        try {
            const id = req.params.id
            const category = await Category.findById(id)
            if (category) {
                res.json({
                    category: category
                })
            } else {
                res.json({
                    error: 'Couldn\'t find category'
                })
            }
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async updateCategory(req, res, next) {
        try {
            const id = req.params.id
            const category = await Category.findById(id)
            if (category) {
                category.title = req.body.title || category.title
                await category.save()
                res.json({
                    message: 'Category is updated successfully',
                    category: category
                })
            } else {
                res.json({
                    error: 'Couldn\'t find category'
                })
            }

        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }

    static async deleteCategory(req, res, next) {
        try {
            const id = req.params.id
            const category = await Category.findById(id)
            if (category) {
                await category.deleteOne()
                res.json({
                    message: 'Category deleted successfully'
                })
            } else {
                res.json({
                    error: 'Couldn\'t find category'
                })
            }
        } catch (err) {
            res.json({
                error: err.message
            })
        }
    }
}