// Importing models to set up associations
const User = require('./user'); // User model
const Comment = require('./comment'); // Comment model
const Like = require('./like'); // Like model
const Post = require('./post'); // Post model
const Settings = require('./settings'); // Settings model

// Define associations for the User model

// A User can have many Comments
User.hasMany(Comment, { foreignKey: 'user_id' });
// A Comment belongs to one User
Comment.belongsTo(User, { foreignKey: 'user_id' });

// A User can have many Likes
User.hasMany(Like, { foreignKey: 'user_id' });
// A Like belongs to one User
Like.belongsTo(User, { foreignKey: 'user_id' });

// A User can have many Posts
User.hasMany(Post, { foreignKey: 'user_id' });
// A Post belongs to one User
Post.belongsTo(User, { foreignKey: 'user_id' });

// A User has one Settings record
User.hasOne(Settings, { foreignKey: 'user_id' });
// Settings belongs to one User
Settings.belongsTo(User, { foreignKey: 'user_id' });

// Define associations for the Comment model

// A Comment can have many Likes
Comment.hasMany(Like, { foreignKey: 'comment_id' });
// A Like belongs to one Comment
Like.belongsTo(Comment, { foreignKey: 'comment_id' });

// Define associations for the Post model

// A Post can have many Comments
Post.hasMany(Comment, { foreignKey: 'post_id' });
// A Comment belongs to one Post
Comment.belongsTo(Post, { foreignKey: 'post_id' });

// A Post can have many Likes
Post.hasMany(Like, { foreignKey: 'post_id' });
// A Like belongs to one Post
Like.belongsTo(Post, { foreignKey: 'post_id' });

// Exporting all models for use in other parts of the application
module.exports = { User, Comment, Like, Post, Settings };