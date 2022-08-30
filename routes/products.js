const express = require('express');
const router  = express.Router();
// get to /products/new
router.get('/new', (req, res) => {
  res.render('add_product')
})


module.exports = router;
