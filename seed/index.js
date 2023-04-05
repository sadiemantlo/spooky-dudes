const env = require('dotenv').config();
const sequelize = require('../config/connection');
const { User } = require('../models');
const seedScenes = require('./sceneData.js');
const seedUsers = require('./userData.js');

const userData = require('./userData');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('Finished seeding database.');
  } catch (error) {
    console.error(error);
    console.error(
      'An error occurred attempting to seed the database. Scroll up for additional details.'
    );
  // } finally {
  //   await sequelize.close();
  }
};

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log('\n---- DATABASE SYNCED ----\n');
  await seedScenes();
  console.log('\n---- SCENES SEEDED ----\n');
  await seedUsers();
  console.log('users have been seeded!')
  process.exit(0);  
};



seed();
// seedDatabase();
