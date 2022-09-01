const db = require('../connection');

const getFavourites = (userId) => {
  return db.query(`SELECT favourites.id as favourite_id, favourites.user_id as user_id, favourites.product_id as product_id, favourites.date_favourited as date_favourited,
                          products.name as product_name, products.price as product_price, products.photo_url as photo_url, products.description as product_description,
                          products.is_sold as is_sold, products.date_posted as date_posted,
                          users.name as user_name, users.email as user_email, users.is_admin as is_admin

                  FROM favourites
                  JOIN products ON products.id = favourites.product_id
                  JOIN users ON users.id = favourites.user_id
                  WHERE users.id=$1;`,[userId])
    .then(data => {
      return data.rows;
    });
};


//Query to add a new message
const sendLike =  function(userId,ProductId) {
  return db.query(
    `INSERT INTO
    favourites(user_id,product_id)
      VALUES($1,$2)
      RETURNING *;`,
    [userId,ProductId])
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getFavourites,sendLike };
