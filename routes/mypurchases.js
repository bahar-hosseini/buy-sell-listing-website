const express = require('express');
const router  = express.Router();
const myPurchasesQueries = require('../db/queries/my_purchases');



router.get('/', (req, res) => {


  // Create a templateVars object
  let templateVars = {};

  // Query the myPurchases
  myPurchasesQueries.getMyPurchases()
    .then(myPurchases => {

      // Store the myPurchases info in templateVars
      templateVars["myPurchases"] = myPurchases;

      // Render the my_purchases view and pass templateVars to the view
      res.render('my_purchases', templateVars);
    })
  // Error handling
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});


module.exports = router;

