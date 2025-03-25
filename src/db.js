const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'hopper.proxy.rlwy.net',
  user: 'root',
  password: 'CfYJeRDGchmxLVXDXQLhLWbByRkjRQPn',
  database: 'railway',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  charset: 'utf8mb4',
  ssl: {
    rejectUnauthorized: false
  }
});

// Função para testar a conexão
pool.testConnection = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.ping();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro na conexão com o banco de dados:', error);
    return false;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = pool;
