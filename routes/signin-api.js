const express = require('express');
const router  = express.Router();
// const queryUser= require('../db/queries/users');

//Post Login
// router.post('/',(req,res)=>{
//    console.log('email')
//   const email = req.body.email;
//   const password = req.body.password;
//   const user = queryUser(email,password);
// //   const userId = req.session['user_id'] = q;
// res.send('hello world')
// console.log(user)

//   const value = {
//     id : generateId,
//     email,
//     password :  bcrypt.hashSync(password , salt),
//     userId,
//     numVisitNew : 0,
//     numVisitEdit :0
//   };

//   users[generateId] = value;

//   //using helper function
//   const user = getUserByEmail(email,users);


//   //cheking if the user has registerd befor (using helper function)
  // if (!user) {
  //  console.log('You are not registered yet')
  //   return res.status(403).send('You are not registered yet');
  // }

  // return res.redirect('/home');
//   //checking if the username and pasword match
//   if (user) {
//     if (password === users[user]['password']) {

//       req.session['user_id'] = generateId;
//       return  res.redirect('/urls');
//     }
//   }
//   return res.status(403).send('email or password doesn\'t match');
// });



module.exports = router;
