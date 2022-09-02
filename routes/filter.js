const express = require('express');
const router  = express.Router();
const productQueries = require('../db/queries/filter');
// get to /filter
router.get('/', (req, res) => {  // localhost:8000/api/filter
  res.render('filter')
})

router.get('/product', (req, res) => {    // localhost:8000/api/filter/product
  productQueries.filterProduct()
    .then((products) => {
      res.json(products);
      console.log(products)

    });
});

/*router.get('/list', (req, res) => {         // localhost:8000/api/filter/list
  res.render('filtered_list');
});
*/
router.post('/list', (req, res) => {
  let max = req.body.max
  let min = req.body.min
  //console.log(max,min)
  productQueries.filterProduct(max,min)
  .then((products) => {
    res.json(products);
    console.log(products)

  });
  //res.render('filtered_list')
  ///res.redirect('/api/list')
})
module.exports = router;
