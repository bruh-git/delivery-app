const LoginService = require('../services/LoginService');

class LoginController {
  constructor(service = new LoginService()) {
    this.service = service;
  }

  static async login(req, res) {
    const { email, password } = req.body;
    await LoginService.validateBody({ email, password });
    const { token, role } = await LoginService.login(email, password);
    return res.status(200).json({ token, role });
  }

  // Ainda não implementado =>0
  async validation(req, res) {
    const { authorization } = req.headers;
    if (!authorization) {
      const e = new Error('Invalid token');
      e.name = 'Authorization';
      throw e;
    }
    const role = await this.service.validation(authorization);
    return res.status(200).json({ role });
  }
}

module.exports = LoginController;