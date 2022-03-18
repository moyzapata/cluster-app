const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cluster"
})

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * from administradores", function (err, result, fields) {
        if (!err) {
            console.log(result);
        } else {
            console.log("Error while performing Query.");
        }
    });
});

/* export function login(mail, pass) {
	const { username, password } = { mail , pass }
	const values = [username, password]
    con.query("SELECT * FROM administradores WHERE correo = ? AND password = ?", values, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result.length > 0) {
                console.log(
                    result[0].id + result[0].nombre + result[0].correo
                )
            } else {
                console.log("no existe")
            }
        }
    })
    con.end()
} */

module.exports = con;