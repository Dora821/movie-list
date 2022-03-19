
var mysql = require('mysql2');
// Build the connection on database
var connection = mysql.createConnection({
  host: 'localhost',
  database: 'movie',
  user: 'root',
  password: '',
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connectiong: ' + err.stack);
  } else {
    console.log('Connected as id ' + connection.threadId);
  }
});

module.exports = connection;