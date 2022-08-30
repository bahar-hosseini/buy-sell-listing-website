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

router.post('/', (req, res) => {
  productQueries.addProduct(req.body)
   .then(data => {
    res.json({data});
   })
  console.log(req.body)
  //res.render('home')
})

module.exports = router;
