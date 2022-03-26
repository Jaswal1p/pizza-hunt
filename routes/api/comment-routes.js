const router = require('express').Router();
const { 
  addComment, 
  removeComment,
  addReply,
  removeReply 
} = require('../../controllers/comment-controller');

// /api/comments/<pizzzaId>
router
  .route('/:pizzaId')
  .post(addComment);

// /api/comments/<pizzaId>/<commentID>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

router
  .route('/:pizzaId/:commentId/:replyId')  
  .delete(removeReply);  

module.exports = router;