const express = require('express');
const router  = express.Router();
// get to /products/new
router.get('/new', (req, res) => {
  res.render('new_product')
})

//res.render(new_product)

module.exports = router;
