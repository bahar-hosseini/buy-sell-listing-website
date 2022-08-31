const db = require('../connection');

const getProducts = () => {
  return db.query('SELECT * FROM products;')
    .then(data => {
      return data.rows;
    });
};

const addProduct = ({name, price, imgUrl, info }) => {
return db.query(`INSERT INTO products(
  user_id,
  name,
  price,
  photo_url,
  description,
  is_sold,
  date_posted
  )
VALUES(1, $1 ,$2, $3, $4 ,false,'2022-01-18' )
RETURNING *;
`, [name, price, imgUrl, info])
.then(data => {
  return data;
})

};


module.exports = { getProducts , addProduct };
