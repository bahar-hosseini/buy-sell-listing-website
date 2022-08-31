const express = require('express');
const router  = express.Router();
const session =  require('express-session');

express().use(session({ secret: 'lighthouselab', resave: false, saveUninitialized: true }));

const queryUser = require('../db/queries/user_login');

router.get('/', (req, res) => {
  res.render('signin');
});

//Post Login
router.post('/', (req,res) =>{
  const {email, password} = req.body;

  queryUser.getUser(email)
  //for now Just works with our db data!!
    .then(response => {
      req.session['user_id'] = response.id;
console.log(response)
      if (response.is_admin) {
        req.session['authorized'] = true;
        res.redirect('/home');
      } else {
        req.session['authorized'] = false;
        res.redirect('/home');
      }

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
