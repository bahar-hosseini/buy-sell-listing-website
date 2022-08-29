/*
 * All routes for Home are defined here
 * Since this file is loaded in server.js into /home,
 *   these routes are mounted onto /home
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;
