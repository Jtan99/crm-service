// src/config/db.js
const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables from .env file

const mysqlPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306, // Default MySQL port
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = {
  mysqlPool,
};
