const db = require('../connection');

// Query the information for a single product based on its ID
const getProduct = (productId) => {
  return db.query(`SELECT * , messages.message as name, users.name as username  FROM products
  JOIN users ON users.id = user_id
  JOIN messages ON  products.id = product_id
   WHERE products.id = ${productId};`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getProduct };
