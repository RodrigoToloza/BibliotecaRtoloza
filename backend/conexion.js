var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());
var PORT = process.env.PORT || 3525;


app.listen(PORT, function(){
    console.log(`Server running in http://localhost:${PORT}`);
    console.log('Defined router:');
    console.log('   [GET] http://localhost:3525/');
});

// Conexion a la BDD

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
})

app.get('/json', function (req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'prueba'
    })
    connection.connect();  
    connection.query('SELECT * FROM prueba', function(err, rows, fields)   
    {  
        connection.end();

        if (err) throw err;

        res.json(rows); 
        
    });
  });
