const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Scene extends Model {}

Scene.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

module.exports = Scene;