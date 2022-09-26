const SaleService = require('../services/SaleService');

class SaleController {
  static async create(req, res) {
    const { authorization } = req.headers;
    await SaleService.validateToken(authorization);
    await SaleService.validateBody(req.body);
    const saleId = await SaleService.create(req.body);
    return res.status(201).json({ saleId });
  }

  static async findOne(req, res) {
    const { id } = req.params;
    await SaleService.validateParams(id);
    const order = await SaleService.findOne(id);
    return res.status(200).json(order);
  }
}

module.exports = SaleController;