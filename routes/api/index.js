const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// add prefix of `/pizzas` and `/comments` to routes created in `pizza-routes.js` and `comments-routes.js`

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;