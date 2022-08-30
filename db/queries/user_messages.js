const db = require('../connection');

// const getUserMsg = (id) =>{
//   return db.query(`SELECT messages.*,
//   products.name as product, products.photo_url as photo,
//   users.name as username
//    FROM  messages
//   JOIN users ON users.id = user_id
//   JOIN products ON  products.id = product_id;`)
//     .then(data => {
//       return data.rows;
//     });
// };



const getProductMsg = (id) =>{
  return db.query(`SELECT messages.* ,
  products.name as product, products.photo_url as photo,products.id as productid
  users.name as username
   FROM  messages
  JOIN users ON users.id = user_id
  JOIN products ON  products.id = product_id;`)
    .then(data => {
      return data.rows;
    });
};




const addMessage =  function(msg) {
  return db.query(
    `INSERT INTO
      messages(message,user_id,product_id)
      VALUES($1,$2,$3)
      RETURNING *;`,
    [msg.text,msg.userid,msg.productid])
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};



module.exports = { getProductMsg ,addMessage};
