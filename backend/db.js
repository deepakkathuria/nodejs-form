const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: 'deepak@123',
  host: "localhost",
  port: 5432,
  database: "deepak4"
});

module.exports = pool;