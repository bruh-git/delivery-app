const Joi = require('joi');
const md5 = require('md5');
const CustomError = require('../middlewares/CustomError');
const { User } = require('../../database/models');
const jwtService = require('./JwtService');

class LoginService {
  async validateBody(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
  
    const { error, value } = schema.validate(data);
    if (error) throw new CustomError(error.details[0].message, 400);
    
    return value;
  }

  async login(email, password) {
    const user = await User.findOne({
      attributes: ['email', 'password', 'role'],
      where: { email },
    });
    const crypt = md5(password) === user.password;
    console.log({ body: md5(password), db: user.password });
    if (!user || !crypt) throw new CustomError('Not found', 404);
    const token = jwtService.createToken({ email, password });
    const { role } = user;

    return { token, role };
  }
}

module.exports = LoginService;