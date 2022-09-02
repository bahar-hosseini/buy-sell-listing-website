const db = require('../connection');


//Query to show all messages
const getUserProductMsg = (id) =>{
  return db.query(`SELECT messages.* ,
  products.name as product, products.photo_url as photo,products.id as productid,
  users.name as username,users.email as email
   FROM  messages
  JOIN users ON users.id = user_id
  JOIN products ON  products.id = product_id
  WHERE  messages.user_id=$1 OR products.user_id=$1;`,[id])
    .then(data => {
      return data.rows;
    });
};



//Query to show all messages
const getAdminProductMsg = (id) =>{
  return db.query(`SELECT messages.* ,
  products.name as product, products.photo_url as photo,products.id as productid,
  users.name as username
   FROM  messages
  JOIN users ON users.id = user_id
  JOIN products ON  products.id = product_id WHERE  messages.user_id=$1 OR products.user_id=$1;`,[id])
    .then(data => {
      return data.rows;
    });
};



//Query to add a new message
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



module.exports = { getAdminProductMsg,getUserProductMsg ,addMessage};
