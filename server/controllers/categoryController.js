const {Category} = require('../models/models');

class CategoryController {
    async create(req, res) {
        const {category_name} = req.body;
        const category = await Category.create({category_name});
        return res.json(category);
    }

    async getAll(req, res) {
        const categorys = await Category.findAll();
        return res.json(categorys);
    }
}

module.exports = new CategoryController()