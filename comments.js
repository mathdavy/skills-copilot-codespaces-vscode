// Create Web Server 
// Create Database Connection
// Create Schema
// Create Model
// Create Routes
// Create Views

// Import Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./models/comment');

// Create Express App
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comment-system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create Routes
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

app.post('/comments', async (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  });

  await comment.save();

  res.send(comment);
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
