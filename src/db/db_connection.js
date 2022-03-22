const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cluster"
})

con.connect(function (err) {
    if (err) throw err;
    con.query("INSERT INTO empresas (nombre, direccion, nombre_contacto, telefono_contacto, email_contacto) VALUES ('ati', 'conocido', 'ricardo', '1234567890', 'ricargo@gmail.com')", function (err, result, fields) {
        if (!err) {
            console.log(result);
        } else {
            console.log("Error while performing Query. " + err);
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