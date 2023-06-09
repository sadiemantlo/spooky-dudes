const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

// create connection to the db. Connect to JWASDB instance if env var provided.
// (Heroku creates this variable when you provision a JAWSDB instance.)
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // use local .env file for connection arguments
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
