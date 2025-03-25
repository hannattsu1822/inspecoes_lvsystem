const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'hopper.proxy.rlwy.net',
  user: 'root',
  password: 'CfYJeRDGchmxLVXDXQLhLWbByRkjRQPn',
  database: 'railway',
  port: 28603,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
