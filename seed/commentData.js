const { Comment } = require("../models");
const commentData = 
[
  {
    "name": "Harry",
    "comment": "So fun!!"
  },
  {
    "name": "Hermione",
    "comment": "LOVED THIS GAME"
  },
  {
    "name": "Hagrid",
    "comment": "This game was so scary I almost peed my pants"
  },
]

const seedComments = () => Comment.bulkCreate(commentData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedComments;