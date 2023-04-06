const router = require('express').Router();
const path = require('path');
const db = require('../../db/comments.json');
const fs = require('fs');
const withAuth = require('../../util/withAuth');

router.get('/', (req, res) => {
    const savedComments = db;
    res.json(savedComments);
});

router.post('/', (req, res) => {
    const savedComments = db;
    const newComment = req.body;
    savedComments.push(newComment);
    fs.writeFileSync(path.join(__dirname, '../../db/comments.json'), JSON.stringify(savedComments));
    res.status(200).json(savedComments);
});

module.exports = router;