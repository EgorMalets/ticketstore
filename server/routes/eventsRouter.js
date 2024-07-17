const Router = require('express');
const router = new Router();
const eventsController = require('../controllers/eventsController');
const checkRole = require('../middleware/checkRoleMiddlewear');

router.post('/', checkRole('admin'), eventsController.create);
router.get('/', eventsController.getAll);
router.get('/:event_id', eventsController.getOne);

module.exports = router;