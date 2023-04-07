const { Comment } = require("../models");
const commentData = 
[
  {
    "name": "",
    "comment": ""
  },
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
  {
    "name": "Bob",
    "comment": "Darn tootin' fun!"
  },
  {
    "name": "Karen",
    "comment": "I'm suing"
  }
]

const seedComments = () => Comment.bulkCreate(commentData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedComments;