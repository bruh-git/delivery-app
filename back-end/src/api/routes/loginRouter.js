const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router();

const loginController = new LoginController();

router.post('/', (req, res) => loginController.login(req, res));

module.exports = router;