const db = require('../connection');

const getUserMsg = (id) =>{
  return db.query(`SELECT messages.*, products.name as products FROM  messages
  JOIN products ON  products.id = product_id;`)
    .then(data => {
      return data.rows;
    });
};



module.exports = { getUserMsg};
