const express = require('express');
const mysql = require('mysql2');

const app = express();

const password = 'password';

var token = '12345';

var secret = '6789';

const connection = mysql.createConnection({
  host: 'sql://localhost:1234',
  user: 'user',
  password: 'password',
  database: 'your_database_name'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Your Express routes and other configurations go here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
