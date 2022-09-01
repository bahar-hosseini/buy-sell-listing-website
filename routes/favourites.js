/*
 * All routes for Favourites are defined here
 * Since this file is loaded in server.js into /favourites,
 *   these routes are mounted onto /favourites
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const favouritesQueries = require('../db/queries/favourites');
const session =  require('express-session');


router.get('/', (req, res) => {

  // Create a templateVars object
  let templateVars = {};

  const userId = req.session['user_id'];

  // Query the favourites
  favouritesQueries.getFavourites(userId)
    .then(favourites => {



      // Store the favourites info in templateVars
      templateVars["favourites"] = favourites;

      // Render the favourites.ejs view and pass templateVars to the view
      res.render('favourites', templateVars);
    })
    // Error handling
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});



module.exports = router;
