const ProductsService = require('../services/ProductsService');

class ProductsController {
  constructor(service = new ProductsService()) {
    this.service = service;
  }

  static async findAll(req, res) {
    const { authorization } = req.headers;
    await ProductsService.validation(authorization);
    const products = await ProductsService.findAll();
    return res.status(200).json(products);
  }
}

module.exports = ProductsController;