// Import necessary modules from Sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Import the User model to define foreign key relationships
const User = require('./user');

// Define the Post model
const Post = sequelize.define('Post', {
    // Define the 'post_id' field
    post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'post_id'
    },
    // Define the 'user_id' field
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    // Define the 'content' field
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // Define the 'image_url' field
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // Define the 'video_url' field
    video_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    // Model options
    timestamps: true,
    underscored: true,
    tableName: 'post'
});

// Export the Post model for use in other parts of the application
module.exports = Post;