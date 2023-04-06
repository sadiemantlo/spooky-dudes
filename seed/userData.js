const { User } = require('../models');
const userData = 
[
  {
    "username": "harry",
    "password": "password123"
  },
  {
    "username": "hermione",
    "password": "password123"
  },
  {
    "username": "hagrid",
    "password": "password123"
  }
]

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;