const express = require('express');
const router  = express.Router();
const messageQueries = require('../db/queries/user_messages');

//post request to send a new message
router.post('/', (req, res) => {
  const msg = req.body;
  console.log('----------->',msg);
  //TO DO : Add user id and product id to addmssg function
  messageQueries.addMessage(msg)
    .then(messages => {
      console.log('POST NEW MESSAGE: api ---->',messages);
      res.json({ messages });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



//get request to message page
router.get('/', (req, res) => {
  //TO DO :create helper function get product messages
  // messageQueries.getUsertMsg()
  messageQueries.getProductMsg()

    .then(messages => {
      console.log('GET all MESSAGES: api ---->',messages);
      res.json({ messages });
    })
    .catch(err => {
      console.error(err);
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
