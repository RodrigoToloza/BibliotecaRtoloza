const db = require('../config/conexion');

db.app.get('/libros', (req, res) => {
    db.connection.query('SELECT * FROM libros', (err, rows, fields) => {
        
        if (err) throw err;

        res.json(rows);
    })
})