const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cluster-app"
})

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * from user", function (err, result, fields) {
        if (!err) {
            console.log(result);
        } else {
            console.log("Error while performing Query.");
        }
    });
});

module.exports = con;