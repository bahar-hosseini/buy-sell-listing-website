const db = require('../connection');

// Query the information for a single product based on its ID
const getUser = (email) => {
  return db.query(`SELECT * FROM users
   WHERE users.email ILIKE $1;`,[email])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUser };
