var mysql = require('mysql');
var con = mysql.createConnection({
     host:"localhost",
    port:"12345",
    user:"root",
    password:"12345",
    database: "movies"
});

con.connect(function(err)
{
    if (err) throw err;
  console.log("Connected!");
});
module.exports = con;


// /* @flow weak */
// "use strict";
// module.exports = () => {
//   return require("knex")({
//     client: "mysql",
//       connection: {
//         host: "localhost",
//         port: 12345,
//         user: "root",
//         password: "12345",
//         database: "movies"
//         }
//   });
// };
