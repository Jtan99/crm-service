// src/routes/route1.js
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Hello from route1');
});

module.exports = router;
