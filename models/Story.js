const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Story extends Model {}

Story.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        scene_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'scene',
                key: 'id',
                unique: false,
              }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false,
              }
        }
    }
);

module.exports = Story;