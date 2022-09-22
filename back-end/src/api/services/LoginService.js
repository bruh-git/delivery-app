const Joi = require('joi');
const md5 = require('md5');
const CustomError = require('../middlewares/CustomError');
const { User } = require('../../database/models');
const jwtService = require('./JwtService');

class LoginService {
  static async validateBody(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
  
    const { error, value } = schema.validate(data);
    if (error) throw new CustomError(error.details[0].message, 400);
    
    return value;
  }

  static async login(email, password) {
    const user = await User.findOne({
      attributes: ['email', 'password', 'role'],
      where: { email },
    });
    const checkPassword = md5(password) === user.password;
    if (!user || !checkPassword) throw new CustomError('Not found', 404);
    const token = jwtService.createToken({ email, password });
    const { role } = user;

    return { token, role };
  }
}

module.exports = LoginService;