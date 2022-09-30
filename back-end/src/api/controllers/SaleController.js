const SaleService = require('../services/SaleService');

class SaleController {
  static async create(req, res) {
    const { authorization } = req.headers;
    console.log(authorization);
    await SaleService.validateToken(authorization);
    await SaleService.validateBody(req.body);
    const sale = await SaleService.create(req.body);
    return res.status(201).json(sale);
  }

  static async findOne(req, res) {
    const { id } = req.params;
    await SaleService.validateParams(id);
    const order = await SaleService.findOne(id);
    const orderSerialized = await SaleService.serialize(order);
    return res.status(200).json(orderSerialized);
  }

  

  static async findAllSellers(req, res) {
    const { authorization } = req.headers;
    await SaleService.validateToken(authorization);
    const sellers = await SaleService.findAllSellers();
    return res.status(200).json(sellers);
  } 

  static async findByUserId(req, res) {
    const { authorization } = req.headers;
    const { id: userId } = req.params;
    const role = await SaleService.validateToken(authorization);
    await SaleService.validateParams(userId);
    const orders = await SaleService.findByUserId({userId, role});
    return res.status(200).json(orders);
  } 
}

module.exports = SaleController;