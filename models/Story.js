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
            type: DataTypes.STRING,
            references: {
                model: 'scene',
                key: 'id',
                unique: false,
              }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'story',
      }
);

module.exports = Story;