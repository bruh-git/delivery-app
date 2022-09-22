const { Router } = require('express');
const ProductsController = require('../controllers/ProductsController');

const router = Router();

router.get('/products', (req, res) => ProductsController.findAll(req, res));

module.exports = router;