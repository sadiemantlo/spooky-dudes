const router = require('express').Router();

const { User, Story, Scene } = require('../models');
const withAuth = require("../util/withAuth");

// use withAuth middleware to redirect from protected routes.


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
  if (req.session.logged_in) {
    res.redirect('/select');
    return;
  }
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

router.get('/comments', (req, res) => {
  res.render('comment', { title: 'Comment Page' });
});


router.get('/select', async (req, res) => {
   try {
    console.log('----- Req.session is -----', req.session);
    // Find the logged in user based on the session ID
    const userData = await User.findOne({ where: { username: req.session.user_username}}, {
      attributes: { exclude: ['password'] },    
    });
    console.log('----- userData is -----', userData);
    const user = userData.get({ plain: true });

    res.render('select', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/comment', (req, res) => {
  res.render('comment', { title: 'Comment' });
});


router.get('/credit', (req, res) => {
  res.render('credit', { title: 'Credits' });
});

//get scene by id
  router.get('/story/:id', async (req, res) =>{
    try {
      const sceneData = await Scene.findByPk(req.params.id);
      if(!sceneData) {
        res.status(404).json({ message: 'No scene found with this id :/' });
        return;
      }
      const scene = sceneData.get({ plain: true });
      res.render('story',{scene});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//renders all scenes at once, keep for debugging purposes
// router.get('/story', async (req, res) => {
//   try{
//     const sceneData = await Scene.findAll( {
//       include: { 
//         model: Story 
//       },
//     });
//     const scenes = sceneData.map((scene) => scene.get({plain:true}));
//     console.log(scenes);
//     res.render('story',{scenes});
//   }
//   catch (error) {
//     console.error(error);
//     res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
//   }
//   });


//this one doesn't work
// router.get('/story/:id', async (req, res) =>{
//   try {
//     const sceneData = await Scene.findByPk(req.params.id, {
//             include: { 
//               model: Story 
//             },
//           });
//   const scenes = sceneData.get({ plain: true });


//     console.log(sceneData);
//     res.render('story',{scenes});

//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }

//   })
router.get('/story/:id', async (req, res) => {
  try {
    const sceneData = await Scene.findByPk(req.params.id);
    if (!sceneData) {
      res.status(404).json({ message: 'No scene found with this id :/' });
      return;
    }
    const scene = sceneData.get({ plain: true });
    res.render('story', { scene });
    // res.status(200).json(sceneData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
