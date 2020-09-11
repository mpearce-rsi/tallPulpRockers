const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'we4allah',
  database: 'asana_db',
});


mysqlConnection.connect((err) => {
  if (!err) {
    console.log('Connected');
  } else {
    console.log(err);
  }
});

module.exports = mysqlConnection;
