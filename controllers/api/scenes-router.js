const router = require('express').Router();
const { Scene } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const newScene = await Scene.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;