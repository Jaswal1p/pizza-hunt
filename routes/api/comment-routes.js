const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/<pizzzaId>
router
  .route('/:pizzaId')
  .post(addComment);

// /api/comments/<pizzaId>/<commentID>
router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);  

module.exports = router;