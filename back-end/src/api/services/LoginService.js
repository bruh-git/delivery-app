const Joi = require('joi');
const md5 = require('md5');
const CustomError = require('../middlewares/CustomError');
const { User } = require('../../database/models');
const jwtService = require('./JwtService');

class LoginService {
  static async validateBody(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    });
  
    const { error, value } = schema.validate(data);
    if (error) throw new CustomError(error.details[0].message, 400);
    
    return value;
  }

  static async login(email, password) {
    const user = await User.findOne({
      attributes: ['id', 'email', 'password', 'role', 'name'],
      where: { email },
    });

    if (user === null) throw new CustomError('Not found', 404);

    const checkPassword = md5(password) === user.password;
    if (!checkPassword) throw new CustomError('Email or password incorrect', 403);

    const token = jwtService.createToken({ email, name: user.name });
    const { role, id } = user;

    return { id, token, role, name: user.name, email };
  }
}

module.exports = LoginService;