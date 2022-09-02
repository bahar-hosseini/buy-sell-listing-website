/*
 * All routes for Product are defined here
 * Since this file is loaded in server.js into /product,
 *   these routes are mounted onto /product
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const productQueries = require('../db/queries/product');
const session =  require('express-session');


// The GET route for the
router.get('/:id', (req, res) => {

  // Store the product ID
  let id = req.params.id;
  // Create a templateVars object
  let templateVars = {};

  // Query the project
  productQueries.getProduct(id)
    .then(products => {

      // If the product does not exist, display an error message
      if (products[0] === undefined) {
        res.status(403).send('This product does not exist');
      }

      // Store the product info in templateVars
      templateVars["product"] = products[0];

      templateVars["userId"] = req.session['user_id'];

      templateVars["productid"] = id;
      templateVars["method"] = 'email';
      // templateVars["method"] = 'message';
      // templateVars["method"] = 'app';

      templateVars["isAuthorized"] =  req.session.authorized;

      // Render the product.ejs view and pass templateVars to the view
      res.render('product', templateVars);
    })
  // Error handling
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});




module.exports = router;
