const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Scene extends Model {}

Scene.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        choices: {
            type: DataTypes.STRING,
            get(){
                return this.getDataValue("choices").split(",");
            },
            set(value){
                this.setDataValue("choices",value.join(","));
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'scene',
      }
);

module.exports = Scene;