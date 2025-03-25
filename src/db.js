const mysql = require('mysql2/promise'); // Usando a versão promise

// Configuração para o Railway (com fallback para desenvolvimento)
const pool = mysql.createPool({
  host: process.env.MYSQLHOST || 'mysql.railway.internal', // URL interna do Railway
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'CfYJeRDGchmxLVXDXQLhLWbByRkjRQPn',
  database: process.env.MYSQLDATABASE || 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000, // 10 segundos
  ssl: process.env.NODE_ENV === 'production' ? undefined : { 
    rejectUnauthorized: false // SSL para desenvolvimento
  }
});

// Teste de conexão ao iniciar
pool.getConnection()
  .then(conn => {
    console.log('✅ Conectado ao MySQL via:', process.env.MYSQLHOST || 'mysql.railway.internal');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Falha na conexão com MySQL:', err.message);
    process.exit(1); // Encerra o aplicativo se não conectar
  });

module.exports = pool;
