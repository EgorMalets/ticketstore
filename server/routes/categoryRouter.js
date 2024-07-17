const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddlewear');

router.post('/', checkRole('admin'), categoryController.create);
router.get('/', categoryController.getAll);

module.exports = router;