const { Router } = require('express');
const SaleController = require('../controllers/SaleController');

const router = Router();

router.post('/orders', (req, res) => SaleController.create(req, res));
router.patch('/orders', (req, res) => SaleController.update(req, res));
router.get('/orders/sellers', (req, res) => SaleController.findAllSellers(req, res));
router.get('/orders/:id', (req, res) => SaleController.findOne(req, res));
router.get('/orders/user/:id', (req, res) => SaleController.findByUserId(req, res));

module.exports = router;