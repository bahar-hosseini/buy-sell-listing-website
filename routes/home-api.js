const express = require('express');
const router  = express.Router();
const productQueries = require('../db/queries/products');

// router.get('/', (req, res) => {
//   res.render('home');
// });

// GET /products/
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      res.json(products);

    });
});

module.exports = router;
