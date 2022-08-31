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

router.post('/', (req, res) => {
  productQueries.addProduct(req.body);
  messageQueries.getProductMsg(req.body)
    .then(data => {
      console.log(data);
      // alert ("Product added!")
      res.redirect('/home');
    //res.json({data});
    });
  console.log(req.body);
  //res.render('home')
});

module.exports = router;
