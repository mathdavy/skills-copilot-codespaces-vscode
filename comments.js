// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// GET: /comments/
// Get all comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) {
      return res.send(err);
    }
    res.json(comments);
  });
});

// POST: /comments/
// Create a comment
router.post('/', function(req, res, next) {
  var comment = new Comment();

  comment.author = req.body.author;
  comment.text = req.body.text;

  comment.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Comment added' });
  });
});

// GET: /comments/:comment_id
// Get a comment by id
router.get('/:comment_id', function(req, res, next) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) {
      return res.send(err);
    }
    res.json(comment);
  });
});

// PUT: /comments/:comment_id
// Update a comment by id
router.put('/:comment_id', function(req, res, next) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) {
      return res.send(err);
    }

    comment.author = req.body.author;
    comment.text = req.body.text;

    comment.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Comment updated' });
    });
  });
});

// DELETE: /comments/:comment_id
// Delete a comment by id
router.delete('/:comment_id', function(req, res, next) {
  Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Comment deleted' });
  });
});

// Export router
module.exports = router;