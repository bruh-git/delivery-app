const ProductsService = require('../services/ProductsService');

class ProductsController {
  constructor(service = new ProductsService()) {
    this.service = service;
  }

  async findAll(req, res) {
    const { authorization } = req.headers;
    await this.service.validation(authorization);
    const products = await this.service.findAll();
    return res.status(200).json(products);
  }
}

module.exports = ProductsController;