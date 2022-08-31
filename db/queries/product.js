const db = require('../connection');

// Query the information for a single product based on its ID
const getProduct = (productId) => {
  return db.query(`SELECT * FROM products
   WHERE products.id = ${productId};`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getProduct };
