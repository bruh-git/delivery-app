const ProductService = require('../services/ProductService');

class ProductController {
  static async findAll(req, res) {
    const { authorization } = req.headers;
    await ProductService.validation(authorization);
    const products = await ProductService.findAll();
    return res.status(200).json(products);
  }
}

module.exports = ProductController;