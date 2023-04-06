const { Comment } = require('../../models')
const router = require('express').Router();
// const path = require('path');
// const db = require('../../db/comments.json');
// const fs = require('fs');

router.get('/', (req, res) => {
    // const savedComments = db;
    // res.json(savedComments);
    // res.sendFile(path.join(__dirname, '../../views/view-comment.handlebars'));
    res.render('view-comment', { title: 'View posted comments' });
});

// router.post('/', async (req, res) => {
//     const savedComments = db;
//     const newComment = req.body;
//     savedComments.push(newComment);
//     fs.writeFileSync(path.join(__dirname, '../../db/comments.json'), JSON.stringify(savedComments));
//     res.status(200).json(savedComments);
// });

router.post('/', async (req, res) => {
  console.log(req.body);
    try {
        const commentData = await Comment.create({name: req.body.name, comment: req.body.comment});
        console.log(commentData)
        res.status(200).json(commentData);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
})

module.exports = router;