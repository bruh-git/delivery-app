const { Router } = require('express');
const RegisterController = require('../controllers/RegisterController');

const router = Router();

router.post('/register', (req, res) => RegisterController.register(req, res));

module.exports = router;