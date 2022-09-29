const { Router } = require('express');
const SaleController = require('../controllers/SaleController');

const router = Router();

router.post('/orders', (req, res) => SaleController.create(req, res));
router.get('/orders/sellers', (req, res) => SaleController.findAllSellers(req, res));
router.get('/orders/:id', (req, res) => SaleController.findOne(req, res));

module.exports = router;