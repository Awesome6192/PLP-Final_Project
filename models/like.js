// Import necessary modules from Sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Import the User model to define foreign key relationships
const User = require('./user');

// Import the Comment model
const Comment = require('./comment');

// Import the Post model
const Post = require('./post');

// Define the Like model
const Like = sequelize.define('Like', {
    // Define the 'like_id' field
    like_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // Define the 'user_id' field
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    // Define the 'discussion_id' field
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Post,
            key: 'post_id',
        },
    },
    // Define the 'comment_id' field
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Comment,
            key: 'comment_id',
        },
    }
}, {
    // Model options
    timestamps: false,
    underscored: true,
});

// Export the Like model
module.exports = Like;