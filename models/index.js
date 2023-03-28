const User = require('./User');
const Story = require('./Story');
const Scene = require('./Scene');

// Define sequelize associations in this file.

Story.belongsTo(User, {
    foreignKey: 'user_id'
});

Story.hasMany(Scene, {
    foreignKey: 'scene_id',
    onDelete: 'CASCADE'
});



module.exports = { User, Story, Scene };