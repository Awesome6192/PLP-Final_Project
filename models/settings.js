// Import necessary modules from Sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Settings model
const Settings = sequelize.define('Settings', {
    // Define the 'user_id' field
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'user_id'
        }
    },
    // Define the 'username' field
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // Define the 'email' field
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    // Define the 'previousPassword' field
    previousPassword: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // Define the 'newPassword' field
    newPassword: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // Define the 'confirmPassword' field
    confirmPassword: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // Define the 'language' field
    language: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'en',
    }
}, {
    // Model options
    timestamps: true,
    underscored: true,
});

// Define associations
Settings.associate = (models) => {
    Settings.belongsTo(models.User, { foreignKey: 'user_id' });
};

// Export the Settings model for use in other parts of the application
module.exports = Settings;