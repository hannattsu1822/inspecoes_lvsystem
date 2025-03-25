const mysql = require('mysql2/promise'); // Usando mysql2 com suporte a async/await

const pool = mysql.createPool({
  host: 'hopper.proxy.rlwy.net',      // Host do Railway
  user: 'root',                       // Usuário (mesmo da URL)
  password: 'CfYJeRDGchmxLVXDXQLhLWbByRkjRQPn', // Senha da URL
  database: 'railway',                // Nome do banco (final da URL)
  port: 28603,                        // Porta da URL
  waitForConnections: true,           // Configurações opcionais
  connectionLimit: 10,                // Limite de conexões
  queueLimit: 0,
});

module.exports = pool;
