const RegisterService = require('../services/RegisterService');

class RegisterController {
  static async register(req, res) {
    const { email, name, password } = req.body;
    await RegisterService.validateBody({ email, name, password });
    await RegisterService.register(email, name, password);
    return res.status(201).json({ message: 'Created' });
  }
}

module.exports = RegisterController;