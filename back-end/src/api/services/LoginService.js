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
      attributes: ['email', 'password', 'role', 'name'],
      where: { email },
    });

    if (user === null) throw new CustomError('Not found', 404);

    const checkPassword = md5(password) === user.password;
<<<<<<< HEAD
    if (!user || !checkPassword) throw new CustomError('Not found', 404);
    
=======
    if (!checkPassword) throw new CustomError('Email or password incorrect', 403);

>>>>>>> 160e99a0f4ee369c85255d19c6a5d9187fc23ccc
    const token = jwtService.createToken({ email, name: user.name });
    const { role } = user;

    return { token, role };
  }
}

module.exports = LoginService;