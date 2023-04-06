const User = require('./User');
const Story = require('./Story');
const Scene = require('./Scene');
const Comment = require('./Comment');

// Define sequelize associations in this file.

Scene.belongsTo(Story, {
    foreignKey: 'scene_id'
});

Story.hasMany(Scene, {
    foreignKey: 'scene_id',
    onDelete: 'CASCADE'
});



module.exports = { User, Story, Scene, Comment };