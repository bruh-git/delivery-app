const { Router } = require('express');
const SaleController = require('../controllers/SaleController');

const router = Router();

router.post('/orders', (req, res) => SaleController.create(req, res));
router.patch('/orders', (req, res) => SaleController.update(req, res));
router.get('/orders/:id', (req, res) => SaleController.findOne(req, res));

module.exports = router;