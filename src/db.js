const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'CfYJeRDGchmxLVXDXQLhLWbByRkjRQPn',
  database: 'railway',
  port: 28603,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
