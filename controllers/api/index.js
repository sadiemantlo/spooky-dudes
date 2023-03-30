const router = require('express').Router();
const usersRouter = require('./users-router');
const sceneRouter = require('./scene-router');

router.use('/users', usersRouter);
router.use('/scene', sceneRouter);

module.exports = router;
