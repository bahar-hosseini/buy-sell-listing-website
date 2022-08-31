const db = require('../connection');

const getFavourites = () => {
  return db.query(`SELECT favourites.id as favourite_id, favourites.user_id as user_id, favourites.product_id as product_id, favourites.date_favourited as date_favourited,
                          products.name as product_name, products.price as product_price, products.photo_url as photo_url, products.description as product_description,
                          products.is_sold as is_sold, products.date_posted as date_posted,
                          users.name as user_name, users.email as user_email, users.is_admin as is_admin

                  FROM favourites
                  JOIN products ON products.id = favourites.product_id
                  JOIN users ON users.id = favourites.user_id;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavourites };
