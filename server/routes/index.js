const Router = require('express');
const router = new Router();
const categoryRouter = require('./categoryRouter');
const eventsRouter = require('./eventsRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/events', eventsRouter);
router.use('/category', categoryRouter);

module.exports = router;