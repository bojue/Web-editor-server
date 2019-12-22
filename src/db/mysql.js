var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : "admin123",
  database : 'performance_schema'
});
 
connection.connect();
 
 