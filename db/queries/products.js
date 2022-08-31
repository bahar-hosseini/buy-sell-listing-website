const db = require('../connection');

const getProducts = () => {
  return db.query('SELECT * FROM products;')
    .then(data => {
      return data.rows;
    });
};


// Query to add product(new listing)

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

// Query to remove a product(listing) based on its ID

const removeProduct = (productId) => {
  return db.query(`DELETE * FROM products WHERE id = $1 RETURNING *`, [productId])
  .then(data =>{
    return data;
  } )
}

module.exports = { getProducts , addProduct , removeProduct};
