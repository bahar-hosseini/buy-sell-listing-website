const express = require('express');
const router  = express.Router();
const messageQueries = require('../db/queries/user_messages');

//post request to send a new message
router.post('/', (req, res) => {
  const msg = req.body;
  console.log('----------->',msg);
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
  messageQueries.getUserMsg()
    .then(messages => {
      // console.log('GET all MESSAGES: api ---->',messages);
      res.json({ messages });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
