const { Router } = require('express');
const AdminController = require('../controllers/AdminController');

const router = Router();

router.post('/admin', (req, res) => AdminController.create(req, res));
router.get('/admin', (req, res) => AdminController.findAll(req, res));
router.delete('/admin/:id', (req, res) => AdminController.delete(req, res));

module.exports = router;