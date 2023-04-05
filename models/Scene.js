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
        choice1: {
            type: DataTypes.STRING,
            get(){
                return this.getDataValue("choice1").split(",");
            },
            set(value){
                this.setDataValue("choice1",value.join(","));
            }
        },
        choice2: {
            type: DataTypes.STRING,
            get(){
                return this.getDataValue("choice2").split(",");
            },
            set(value){
                this.setDataValue("choice2",value.join(","));
            }
        },
        choice3: {
            type: DataTypes.STRING,
            get(){
                return this.getDataValue("choice3").split(",");
            },
            set(value){
                this.setDataValue("choice3",value.join(","));
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