const db = require('../connection');

const getUserMsg = (id) =>{
  return db.query(`SELECT messages.*,
  products.name as product,  products.photo_url as photo,
  users.name as username
   FROM  messages
  JOIN users ON users.id = user_id
  JOIN products ON  products.id = product_id;`)
    .then(data => {
      return data.rows;
    });
};



const addMessage =  function(msg,userId,productId) {
  return db.query(
    `INSERT INTO
      messages(message)
      VALUES($1)
      RETURNING *;`,
    [msg.text,userId])
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};



module.exports = { getUserMsg,addMessage};
