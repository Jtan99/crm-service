// src/routes/route1.js
const express = require('express');
const { pgPool } = require('../config/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pgPool.query('SELECT * FROM your_pg_table');
    res.json(result.rows);
  } catch (error) {
    console.error('Error querying PostgreSQL:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
