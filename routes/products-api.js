const express = require('express');
const router  = express.Router();
const productQueries = require('../db/queries/products');
const messageQueries = require('../db/queries/user_messages');

router.get('/', (req, res) => {
  productQueries.getProducts()

    .then(products => {
      res.json({ products });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// The POST route for adding new product(listing)
router.post('/', (req, res) => {

  //Query the project
  productQueries.addProduct(req.body);
  messageQueries.getProductMsg(req.body)
    .then(data => {
      console.log(data);
      // redirects to home page
      res.redirect('/home');
    });
  console.log(req.body);
});

// The POST rout for removing a product(listing)
router.post('/delete', (req, res) => {

  // Store the product ID
  let id = req.body.productId;
  console.log(id);
  // Create a templateVars object
  let templateVars = {};

  // Query the project
  productQueries.removeProduct(id)
    .then(data => {
      console.log(data);
      // redirects to home page
      res.redirect('/home');
    });
});





module.exports = router;
