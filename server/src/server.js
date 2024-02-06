const express = require('express');
const app = express();
// const { pgPool } = require('./config/db');
const { mysqlPool } = require('./config/db');
const cors = require('cors');
const corsOptions = require('./config/cors-config');

// Middleware or other configurations
app.use(cors(corsOptions));

// Routes
const route1 = require('./routes/route1');
const route2 = require('./routes/route2');


// Use routes
app.use('/route1', route1);
app.use('/route2', route2);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.send('made a change, should be reflected in the browser');
});

app.get('/getAllUsers', async (req, res) => {
  console.log("getAllUsers")
  try {
    const connection = await mysqlPool.getConnection();
    const [rows] = await connection.query('SELECT * FROM users');
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error('Error querying MySQL:', error);
    res.status(500).send('Internal Server Error');
  }
});

//Expose server port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
