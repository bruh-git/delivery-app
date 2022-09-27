const AdminService = require('../services/AdminService');

class AdminController {
  constructor(service = new AdminService()) {
    this.service = service;
  }

  static async create(req, res) {
    const { authorization } = req.headers;
    const { name, email, password, role } = req.body;
    await AdminService.validateAdmin(authorization);
    await AdminService.validateBody({ name, email, password, role });
    await AdminService.create(name, email, password, role);
    return res.status(201).json({ message: 'Created' });
  }

    static async findAll(req, res) {
      const { authorization } = req.headers;
      await AdminService.validateAdmin(authorization);
      const users = await AdminService.findAll();
      return res.status(200).json(users);
    }

    static async delete(req, res) {
      const { authorization } = req.headers;
      const { id } = req.params;
      await AdminService.validateAdmin(authorization);
      await AdminService.validateParams(id);
      await AdminService.delete(id);
      return res.status(204);
    }
}

module.exports = AdminController;