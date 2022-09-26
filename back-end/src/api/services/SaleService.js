const Joi = require('joi');
const Sequelize = require('sequelize');
const { Sale, User, SaleProduct } = require('../../database/models');
const jwtService = require('./JwtService');
const CustomError = require('../middlewares/CustomError');
const config = require('../../database/config/config');

const sequelize = new Sequelize(config.development);

class SaleService {
  static async validateBody(data) {
    const schema = Joi.object({
      sale: Joi.object({
        userId: Joi.number().required(),
        sellerId: Joi.number().required(),
        totalPrice: Joi.number().required(),
        deliveryAddress: Joi.string().required(),
        deliveryNumber: Joi.string().required(),
      }),
      products: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        quantity: Joi.number().required(),
      })),
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

  static async create({ sale, products }) {
    const result = await sequelize.transaction(async (t) => {
      const saleResult = await Sale.create({ ...sale, status: 'Pendente', transaction: t });
      console.log(SaleProduct);
      await SaleProduct.bulkCreate(products.map((product) => ({
        saleId: saleResult.id,
        productId: product.id,
        quantity: product.quantity,
      })), {
        transaction: t,
      });
      return saleResult.id;
    });
  
    return result;
  }

  static async validateParams(id) {
      const schema = Joi.number().required();
    
      const { error, value } = schema.validate(id);
      if (error) throw new CustomError(error.details[0].message, 400);
      return value;
  }

  static async findOne(id) {
    const order = await Sale.findOne({ where: { id } })
    return order;
  }
}

module.exports = SaleService;
