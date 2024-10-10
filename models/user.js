// Import necessary modules from Sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the User model
const User = sequelize.define('User', {
    // Define the 'user_id' field
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // Define the 'username' field
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    // Define the 'email' field
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    // Define the 'password' field
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Define the 'is_deleted' field
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
    // Model options
    timestamps: true,
    underscored: true,
});

// Export the User model for use in other parts of the application
module.exports = User;