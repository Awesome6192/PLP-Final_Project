// Existing imports and setup code remain the same
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const http = require('http');
const sequelize = require('./config/database');
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Import models
const User = require('./models/user');
const Like = require('./models/like');
const Comment = require('./models/comment');
const Post = require('./models/post');
const Settings = require('./models/settings');

// Import associations to define relationships between models
require('./models/associations');

// Function to synchronize all models with the database
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
        process.exit(1);
    }
};

// Call the syncDatabase function to synchronize the models with the database
syncDatabase().then(() => {
    const app = express();
    const server = http.createServer(app);

    // Enable CORS
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    // Define session middleware
    const sessionMiddleware = session({
        secret: process.env.SESSION_SECRET || 'your-secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, httpOnly: true, sameSite: 'lax' }
    });

    // Use session middleware in Express
    app.use(sessionMiddleware);

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    // Serve static files
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/uploads', express.static('uploads'));

    // Import and use routes
    const userRoutes = require('./routes/userRoutes');
    const likeRoutes = require('./routes/likeRoutes');
    const commentRoutes = require('./routes/commentRoutes');
    const postRoutes = require('./routes/postRoutes');
    const settingsRoutes = require('./routes/settingsRoutes');

    app.use('/api/user', userRoutes);
    app.use('/api/likes', likeRoutes);
    app.use('/api/comments', commentRoutes);
    app.use('/api/posts', postRoutes);
    app.use('/api/settings', settingsRoutes);

    // Serve HTML files
    app.get('/profile', authMiddleware, (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'profile.html'));
    });

    app.get('/posts', authMiddleware, (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'home.html'));
    });    

    // Handle errors
    app.use(errorHandler);

    server.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
});