const db = require('../connection');


// Query to filter(select) products by price

const filterProduct = (max, min) => {
return db.query(`SELECT * FROM products
 WHERE products.price < $1 AND products.price > $2 `, [max, min])
 .then(data => {
  return data.rows;
 })
}

module.exports = { filterProduct };

