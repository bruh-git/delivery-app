const LoginService = require('../services/LoginService');

class LoginController {
  constructor(service = new LoginService()) {
    this.service = service;
  }

  async login(req, res) {
    const { email, password } = req.body;
    await this.service.validateBody({ email, password });
    const { token, role } = await this.service.login(email, password);
    return res.status(200).json({ token, role });
  }

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