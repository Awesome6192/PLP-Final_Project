// Import the necessary modules
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage });

// Fetch all posts with pagination (supports ?page=1&limit=10)
router.get('/', postController.getAllPosts);

// Create a new post (only authenticated users)
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), authMiddleware, postController.createPost);

// Edit a post (only the author of the post can edit it)
router.put('/:post_id', authMiddleware, postController.editPost);

// Delete a post (only the author of the post can delete it)
router.delete('/:post_id', authMiddleware, postController.deletePost);

// Export the router to be used in other parts of the application
module.exports = router;