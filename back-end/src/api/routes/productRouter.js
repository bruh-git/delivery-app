const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();

router.get('/products', (req, res) => ProductController.findAll(req, res));

module.exports = router;