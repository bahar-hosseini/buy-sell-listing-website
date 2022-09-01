const db = require('../connection');

const getMyPurchases = () => {
  return db.query(`SELECT purchases.id as purchase_id, purchases.user_id as user_id, purchases.product_id as product_id, purchases.purchase_date as purchase_date,
                          products.name as product_name, products.price as product_price, products.photo_url as photo_url, products.description as product_description,
                          products.is_sold as is_sold, products.date_posted as date_posted,
                          users.name as user_name, users.email as user_email, users.is_admin as is_admin

                  FROM purchases
                  JOIN products ON products.id = purchases.product_id
                  JOIN users ON users.id = purchases.user_id;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMyPurchases };
