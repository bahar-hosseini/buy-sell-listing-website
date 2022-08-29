const db = require('../connection');

const getProducts = () => {
  return db.query('SELECT * FROM products;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getProducts };
