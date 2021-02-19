const db = require('../config/conexion');

// PRUEBAS

db.app.get('/cats', (req, res) => {
    db.connection.query('SELECT nombre FROM categorias', (err, rows, fields) => {
        
        if (err) throw err;

        res.json(rows);
    })
})

