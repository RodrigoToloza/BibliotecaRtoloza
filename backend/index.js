// //Convierte una peticion recibida (POST-GET...)  a objeto JSON
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// app.get('/', function(req, res){
//     res.status(200).send({
//         message: 'GET Home route working fine!'
//     });
// });

const con = require('./conexion');

async function main () {
    await con.listen(PORT);
    console.log(`Server running on port ${PORT}`);
}