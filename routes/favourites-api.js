// //external modules
const express = require('express');
const router  = express.Router();
const session =  require('express-session');

//Internal modules
const sendLikeQueries = require('../db/queries/favourites');

//post request to send a new message
router.post('/', (req, res) => {

  let productId = req.body.productId;
  const userId = req.session['user_id'];
  sendLikeQueries.sendLike(userId,productId);

});


module.exports = router;
