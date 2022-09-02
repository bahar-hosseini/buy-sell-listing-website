//external modules
const express = require('express');
const router  = express.Router();

//internal modules
const productQueries = require('../db/queries/user_messages');
// const sendLikeQueries = require('../db/queries/favourites');



//post request to send a new message
router.post('/', (req, res) => {
  const msg = req.body.text;


  //TO DO : Add user id and product id to addmssg function
  productQueries.addMessage(msg)

    .then(messages => {
      res.json({ messages });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
