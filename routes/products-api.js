const express = require('express');
const router  = express.Router();
const productQueries = require('../db/queries/products');

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

module.exports = router;
