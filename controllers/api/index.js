const router = require('express').Router();
const usersRouter = require('./users-router');
const sceneRouter = require('./scene-router');
const commentRouter = require('./comment-router');

router.use('/users', usersRouter);
router.use('/scene', sceneRouter);
router.use('/comments', commentRouter);

module.exports = router;
