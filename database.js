var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);
//var connection = mysql.createConnection('mysql://urjvicx8lx49rwh9:jkb8nqs78171ph3c@eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/tyb9mf2bg36eaz5o');

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

module.exports.connection = connection