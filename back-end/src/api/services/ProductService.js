const { Product, User } = require('../../database/models');
const jwtService = require('./JwtService');
const CustomError = require('../middlewares/CustomError');

class ProductService {
  static async validation(token) {
    if (!token) {
      const e = new CustomError('Token not found!', 401);
      e.name = 'Authorization';
      throw e;
    }
    console.log('oi validation')
    const { email, name } = jwtService.validateToken(token);
    console.log([email, name]);
    const user = await User.findOne({
      attributes: ['email', 'name'],
      where: { email, name },
    });
    console.log('oi validation2')
    if (!user) throw new CustomError('Token invalid', 401);
    console.log('oi validation3')
  }

  static async findAll() {
    const products = await Product.findAll();
    return products;
  }
}

module.exports = ProductService;
