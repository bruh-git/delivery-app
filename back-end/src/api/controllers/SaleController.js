const SaleService = require('../services/SaleService');

class SaleController {
  static async create(req, res) {
    const { authorization } = req.headers;
    await SaleService.validateToken(authorization);
    await SaleService.validateBody(req.body);
    const sale = await SaleService.create(req.body);
    return res.status(201).json(sale);
  }

  static async findOne(req, res) {
    const { id } = req.params;
    await SaleService.validateParams(id);
    const order = await SaleService.findOne(id);
    return res.status(200).json(order);
  }

  static async update(req, res) {
    const { authorization } = req.headers;
    const { id, status } = req.body;
    await SaleService.validateParams(id);
    await SaleService.validateBodyStatus({ id, status });
    const { role, id: userId } = await SaleService.validateToken(authorization);
    await SaleService.roleValidation(role, status);
    await SaleService.update(id, status, role, userId);
    return res.status(202).json('Status updated!');
  }
}

module.exports = SaleController;