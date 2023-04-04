const router = require('express').Router();
const { User, Story, Scene } = require('../models');

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// }); 


router.get('/', async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
    }
    res.render('home', {
      title: 'Home Page',
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

//this one works :)
router.get('/story', async (req, res) => {
  try{
    const sceneData = await Scene.findAll( {
      include: { 
        model: Story 
      },
    });
    const scenes = sceneData.map((scene) => scene.get({plain:true}));
    console.log(scenes);
    res.render('story',{scenes});
  }
  catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
  })

  router.get('story/:id', async (req, res) =>{
    try {
      const sceneData = await Scene.findByPk(req.params.id, {
        include: [
          { 
          model: Scene, 
          attributes: [
            'id',
            'image',
            'title',
            'text',
            'choice1',
            'choice2',
            'choice3'],
        },
      ],
      });
      const scenes = sceneData.map((scene) => scene.get({plain:true}));
    console.log(scenes);
    res.render('story',{scenes});
      if(!sceneData) {
        res.status(404).json({ message: 'No scene found with this id :/' });
        return;
      }
      res.render('story', {scenes})
    
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
    
    })
module.exports = router;
