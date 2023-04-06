const { User } = require("../models");
const userData = 
[
  {
    "username": "Harry",
    "password": "Quidditch"
  },
  {
    "username": "Ronald",
    "password": "Bertiebotts"
  },
  {
    "username": "Hermoine",
    "password": "itsleviOsa"
  }
]

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;