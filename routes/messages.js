const express = require('express');
const router  = express.Router();

//
router.get('/', (req, res) => {
  let templateVar = {userId : 1};
  res.render(`messages`,templateVar);
});

module.exports = router;
