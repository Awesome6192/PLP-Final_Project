// Import the necessary modules
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Comment = require('../models/comment');

// Create a new comment
router.post('/posts/:post_id/comments', authMiddleware, async (req, res) => {
    console.log('Request Body:', req.body);
    try {
        const { user_id, comment_text } = req.body;
        const postId = req.params.post_id;

        if (!user_id || !comment_text || !postId) {
            return res.status(400).json({ error: 'Missing required fields: user_id, comment_text, or post_id' });
        }

        // Create the new comment
        const newComment = await Comment.create({
            post_id: postId,
            user_id: user_id,
            comment_text: comment_text
        });

        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Error creating comment' });
    }
});

// Get all comments
router.get('/posts/:post_id/comments', authMiddleware, async (req, res) => {
    try {
        const postId = req.params.post_id;

        // Fetch all comments for this post
        const comments = await Comment.findAll({
            where: { post_id: postId },
            order: [['created_at', 'DESC']]
        });

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Error fetching comments' });
    }
});

// Get a comment by comment_id
router.get('/:comment_id', async (req, res) => {
    try {
        // Fetching a comment by its primary key (comment_id)
        const comment = await Comment.findByPk(req.params.comment_id); 
        if (comment) {
            // Responding with the comment details and a 200 status code if found
            res.status(200).json(comment); 
        } else {
            // Responding with a 404 status code if the comment is not found
            res.status(404).json({ error: 'Comment not found' }); 
        }
    } catch (error) {
        console.error('Error fetching comment:', error);
        res.status(500).json({ error: 'Error fetching comment' });
    }
});

// Update a comment
router.put('/:comment_id', async (req, res) => {
    try {
        // Destructuring the request body to get updated content
        const { content } = req.body; 
        
        // Updating the comment with the specified comment_id
        const [updated] = await Comment.update({ content }, {
            where: { comment_id: req.params.comment_id } 
        });
        
        if (updated) {
            // Fetching the updated comment details
            const updatedComment = await Comment.findByPk(req.params.comment_id); 
            
            // Responding with the updated comment and a 200 status code
            res.status(200).json(updatedComment); 
        } else {
            // Responding with a 404 status code if the comment is not found
            res.status(404).json({ error: 'Comment not found' }); 
        }
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ error: 'Error updating comment' });
    }
});

// Delete a comment
router.delete('/:comment_id', async (req, res) => {
    try {
        // Deleting the comment with the specified comment_id
        const deleted = await Comment.destroy({
            where: { comment_id: req.params.comment_id } 
        });
        
        if (deleted) {
            // Responding with a 204 status code indicating successful deletion with no content
            res.status(204).json(); 
        } else {
            // Responding with a 404 status code if the comment is not found
            res.status(404).json({ error: 'Comment not found' }); 
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Error deleting comment' });
    }
});

// Exporting the router to be used in other parts of the application
module.exports = router; 