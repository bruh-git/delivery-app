const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router();

// Usando somente método estático login, sem necessidade de instanciamento por ora
// const loginController = new LoginController();

router.post('/login', (req, res) => LoginController.login(req, res));

module.exports = router;