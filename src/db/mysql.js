var mysql      = require('mysql');
var config = require('../configs/DB_mysql')
var connection = mysql.createPool({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});
 
class DB_Mysql {
  constructor() {}
  query(url) {
    if(!url) {
      return false;
    }
    return new Promise((resolve, reject) => {
      connection.query(url, function(error, results, fields){
        if(error) {
          throw error;
        }
        resolve(results);
      })
    })
  }
}
 
module.exports = new DB_Mysql();