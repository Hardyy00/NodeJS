const mysql = require("mysql3");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node",
  password: "hardik",
});

module.exports = pool.promise();
