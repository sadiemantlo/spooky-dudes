const router = require('express').Router();
const withAuth = require('../../util/withAuth');
const { Scene, Story } = require('../../models'); 

// This route isn't used by the boilerplate. It has been included to provide an
// example of an api route which requires the user to be authenticated by using
// the withAuth middleware.
router.get('/', withAuth, (req, res) => {
  res.json({ message: 'hello user!', userId: req.session.userId });
});

router.get('/:id', async (req, res) => {
  try {
    const sceneData = await Scene.findByPk(req.params.id, {
      include: { 
        model: Story 
      },
    });
    if(!sceneData) {
      res.status(404).json({ message: 'No scene found with this id :/' });
      return;
    }
    res.status(200).json(sceneData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
