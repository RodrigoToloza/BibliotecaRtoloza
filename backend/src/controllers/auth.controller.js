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
    res.json('Login')
}