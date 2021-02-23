import db from '../database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signUp = async (req,res) => {
    const {rut, password, nombre, apellido, email, rol} = req.body;  

    await bcrypt.hash(password, 10, (err,hash) => {
        if (err) throw err;

        const sql = `INSERT INTO user(
              rut, pass, nombre, apellido, email, rol
          ) VALUES(`
            + rut + ','
            + '"' + hash + '",'
            + '"' + nombre + '",'
            + '"' + apellido + '",'
            + '"' + email + '",'
            + '"' + rol + '"' +       
        ')';
        if (rol) {
            console.log('en contruccion') 
        }

        db.query(sql, (err, result) => {
            if (err) throw err.sqlMessage;
        })
        const token = jwt.sign({id: rut}, config.SECRET, {
            expiresIn: 86400 //24horas
        })
        res.json({token})
    })
    

}

export const Login = async (req,res) => {
    const rut = req.body.rut;
    const pw = req.body.password;

    db.query('SELECT * FROM user WHERE rut = ?', [rut], (err, rows, fields) => {
        if (err) throw err;
        if(rows.length >0){
            bcrypt.compare(pw, rows[0].pass, (err, ress) => {
                if(!ress){
                    res.json({
                        status:false,
                        message: "Rut y contraseña no coinciden"
                    });
                }else{
                    const token = jwt.sign({id: rut}, config.SECRET, {
                        expiresIn:86400
                    })
                    res.json({
                        status: true,
                        message: "Successfully Login",
                        token
                    })
                }
            });
        }
        else{
            res.json({
                status: false,
                message: "Rut no existe"
            })
        }
    })
}