const Joi = require('joi');
const md5 = require('md5');
const CustomError = require('../middlewares/CustomError');
const { User } = require('../../database/models');
const JwtService = require('./JwtService');

class AdminService {
  static async validateBody(data) {
    const schema = Joi.object({
      name: Joi.string().min(12).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      role: Joi.string().valid('administrator', 'seller', 'customer').required(),
    });
  
    const { error, value } = schema.validate(data);
    if (error) throw new CustomError(error.details[0].message, 400);
    
    return value;
  }

  static async validateAdmin(token) {
    if (!token) {
      const e = new CustomError('Token not found!', 401);
      e.name = 'Authorization';
      throw e;
    }
    const { email, name } = JwtService.validateToken(token);
    const user = await User.findOne({
      attributes: ['role'],
      where: { email, name },
    });
    if (!user) throw new CustomError('Token invalid', 401);
    if (user.role !== 'administrator') throw new CustomError('Unauthorized user', 401);
  }

  static async create(name, email, password, role) {
    const user = await User.findOne({ where: { email } });
    if (user) throw new CustomError('Conflict', 409);

    const hashPassword = md5(password).toString();
    await User.create({ email, name, password: hashPassword, role });
  }

  static async findAll() {
    const users = await User.findAll();
    return users;
  }

  static async validateParams(id) {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new CustomError('Invalid id', 400);
  } 

  static async delete(id) {
    await User.destroy({ where: { id } });
  }
}

module.exports = AdminService;