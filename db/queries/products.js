const db = require('../connection');

const getProducts = () => {
  return db.query('SELECT * FROM products;')
    .then(product => {
      return product.rows;
    });
};

module.exports = { getProducts};
