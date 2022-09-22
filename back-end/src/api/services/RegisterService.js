const Joi = require('joi');
const md5 = require('md5');
const CustomError = require('../middlewares/CustomError');
const { User } = require('../../database/models');

class RegisterService {
  static async validateBody(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().min(12).required(),
      password: Joi.string().min(6).required(),
    });
  
    const { error, value } = schema.validate(data);
    if (error) throw new CustomError(error.details[0].message, 400);
    
    return value;
  }

  static async register(email, name, password) {
    const user = await User.findOne({ where: { email } });
    if (user) throw new CustomError('Conflict', 409);

    const hashPassword = md5(password).toString();
    await User.create({ email, name, password: hashPassword, role: 'customer' });
    // O novo usuário tem que voltar pra página de login para entrar
  }
}

module.exports = RegisterService;