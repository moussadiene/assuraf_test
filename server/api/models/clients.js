import mysql from "mysql";
import dbconfig  from "../../config/database";



let clientModel = {};

clientModel.getClients = (callback) => {
    const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
    if (conn) {
        conn.query('SELECT * FROM client ORDER BY id',
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows);
                    conn.end()
                }
            }
        )
    }
}


export default clientModel