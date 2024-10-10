// Import the necessary modules
const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middleware/authMiddleware');

// Define routes
// Route to get user settings; requires authentication
router.get('/user/settings', authMiddleware, settingsController.getSettings);

// Route to update user settings; requires authentication
router.post('/user/settings', authMiddleware, settingsController.updateSettings);

// Export the router to be used in other parts of the application
module.exports = router; 