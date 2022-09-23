const SaleService = require('../services/SaleService');

class SaleController {
  static async create(req, res) {
    const { authorization } = req.headers;
    await SaleService.validateBody(req.body);
    await SaleService.validateToken(authorization);
    const saleId = await SaleService.create(req.body);
    return res.status(201).json({ message: 'Created', saleId });
  }

  static async findOne(req, res) {
    const { id } = req.params;
    await SaleService.validateParams(id);
    // Cria validação 
    // userId => getUserID(token)
    // checkUserAllowance({ userId, id from params })
  }
}

module.exports = SaleController;