const { Sale, User } = require('../../database/models');
const jwtService = require('./JwtService');
const CustomError = require('../middlewares/CustomError');
const Joi = require('joi');

class SaleService {
  static async validateBody(data) {
    const schema = Joi.object({
      userId: Joi.number().required(),
      sellerId: Joi.number().required(),
      totalPrice: Joi.number().required(),
      deliveryAddress: Joi.string().required(),
      deliveryNumber: Joi.string().required(),
      saleDate: Joi.date().required(),
      status: Joi.string().required(),
    });
  
    const { error, value } = schema.validate(data);
    if (error) throw new CustomError(error.details[0].message, 400);
    
    return value;
  }

  static async validateToken(token) {
    if (!token) {
      const e = new CustomError('Token not found!', 401);
      e.name = 'Authorization';
      throw e;
    }
    const { email, name } = jwtService.validateToken(token);
    const user = await User.findOne({
      attributes: ['email', 'name'],
      where: { email, name },
    });
    if (!user) throw new CustomError('Token invalid', 401);
  }

  static async create(sale) {
    console.log(sale)
    const [insertId] = await Sale.create({sale});
    return insertId;
  }
}

module.exports = SaleService;
