const mysql = require("mysql3");

const pool = mysql.createPool({
  host: "localhost",
});
